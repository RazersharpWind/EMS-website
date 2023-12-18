using DataAccess.DBAccess;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<ISqlDataAccess, SqlDataAccess>();
builder.Services.AddSingleton<IUserData, UserData>();
builder.Services.AddSingleton<IEventData, EventData>();
builder.Services.AddSingleton<IAttendeeData, AttendeeData>();
builder.Services.AddSingleton<IArticleData, ArticleData>();

var app = builder.Build();
//app.Urls.Add("https://192.168.10.48:7084"); //Ubuntu IP address
app.Urls.Add("https://localhost:7230"); //localhost IP address

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "/client",
    pattern: "{controller=Client}/{action=index}/{id?}");

app.MapControllerRoute(
    name: "/client/news",
    pattern: "{controller=Client}/{action=news}/{id?}");

app.MapControllerRoute(
    name: "/admin",
    pattern: "{controller=Admin}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "/admin/events",
    pattern: "{controller=Admin}/{action=Events}/{id?}");

app.MapControllerRoute(
    name: "/admin/news",
    pattern: "{controller=Admin}/{action=news}/{id?}");

app.Run();
