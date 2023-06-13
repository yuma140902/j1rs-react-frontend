# OpenAPIによるAPI定義

## コマンド

### 再生成

```sh
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/openapi.yaml -g typescript-fetch -o /local
```
