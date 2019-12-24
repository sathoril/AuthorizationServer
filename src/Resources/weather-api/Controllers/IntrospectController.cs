using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using IdentityModel;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace apiresource.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class IntrospectController : ControllerBase
    {
        private readonly ILogger<IntrospectController> _logger;

        public IntrospectController(ILogger<IntrospectController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<object> Post([FromBody] AccessTokenValidator token)
        {
            var client = new HttpClient();

            var discoveryClient = await client.GetDiscoveryDocumentAsync("http://localhost:5000");

            if (!discoveryClient.IsError)
            {
                using (var introspectionClient = new HttpClient())
                {
                    introspectionClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", 
                        Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes($"resource-api:74cc878a147e4fb2ac5fede0310aabf3")));
                    
                    List<KeyValuePair<string, string>> requestData = new List<KeyValuePair<string, string>>(); 
                    requestData.Add(new KeyValuePair<string, string>("token", token.AccessToken));

                    FormUrlEncodedContent requestBody = new FormUrlEncodedContent(requestData);
                    var request = await introspectionClient.PostAsync(discoveryClient.IntrospectionEndpoint, requestBody);
                    var response = await request.Content.ReadAsStringAsync();

                    return response;
                }
            }

            return "Erro";

        }
    }
}
