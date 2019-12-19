FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["src/Resources/weather-api/apiresource.csproj", ""]

RUN echo $(ls -l)
RUN dotnet restore "./apiresource.csproj"

COPY ["src/Resources/weather-api/", "."]

RUN echo $(ls -l)

WORKDIR "/src/."
RUN dotnet build "apiresource.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "apiresource.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "apiresource.dll"]