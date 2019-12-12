using System.Collections.Generic;
using IdentityServer4.Models;

namespace IdentityServer4.Quickstart.UI
{
    public static class Config
    {
        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "spa-client",

                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.Code,

                    // secret for authentication
                    RequireClientSecret = false,
                    RedirectUris = { "http://google.com" },

                    // scopes that client has access to
                    AllowedScopes = {  IdentityServerConstants.StandardScopes.OpenId,
                IdentityServerConstants.StandardScopes.Profile }
                }
            };
    }
}