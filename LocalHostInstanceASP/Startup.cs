using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LocalHostInstanceASP.Startup))]
namespace LocalHostInstanceASP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
