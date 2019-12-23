FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
COPY ["src/AuthorizationServer/I4Admin.csproj", "I4Admin/"]

WORKDIR I4Admin

RUN dotnet restore "I4Admin.csproj"
COPY ["src/AuthorizationServer/","."]

RUN dotnet build "I4Admin.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "I4Admin.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENV ASPNETCORE_URLS=http://+:80
ENV ASPNETCORE_FORWARDEDHEADERS_ENABLED=true
ENV ASPNETCORE_ENVIRONMENT=Development

ENTRYPOINT ["dotnet", "I4Admin.dll"]