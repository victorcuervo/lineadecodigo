---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YQFH2R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw7ae3%2FulVREgVVDMq%2FI0K54m6LkT4xHYxfAq30HnfpAiEAuFJt%2FZpPjXBofnIgrEJURH56KtQCLc9Oz0dxzADMRLAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNY0ZyxIYDqcYcN8uircA156w3O835fxkhHwOf5UhqDdeoSLjDNL7v6sy6GR1u1qLGPd7G%2F340w7uQnCRCpxb7VOClYtjBvjYbUyqnhxtmlzrqGZxvHDiHuiAjmaFhiFk6g9BFdf63PUN8dDXSvj2tFm7RUMiuODvKaE4NcUED4KHVcgK0lHVlAdLbOekYoQPryw2LotfMPyefWO5tC%2BqK5rLnIJrV6KinKWka%2FN1tWTqM%2B5C3mG8IZyyR753wfZ%2FYqAHWVypt6r0MI2nfp%2BZttUc1VXRoCAgACrGE518TnVvwG1gcMN8i0HeUIOgDJOSi43D5m0OTFzccaZA%2BntkhD%2B5DIFtgpbh9Edh5pFbZp6ghaHWoBNK%2BBFiqGNDohqRXqC2xzX1ob9k9aLsKSz5%2Fm%2BnKl9uzcAb15s9nOuCvQ%2Fap3p0F4WXjA7NpmZeIPQgB2UmS4Fxks1gCTIFbK5bEf37Y9STTdD5z3YfbuFOyrSsbjWiqmJAqdMXExsydwdrM%2FTPh%2BYWBWFUqqh29CerKEW1ezN8b78uGzKw3mVJzXT7A08j9bXU%2B9jd%2BAqmz1ZQ4Z3eZ8WBFiYd3jIYzYX%2B1hmYxHndHReIekFsRvUc2JiNl%2FtzSUxJ4Ns5IFC8dcMMt4sCISQv8c%2FuLGQMPHwicoGOqUBFFX6wiy8gf9Y8AdxepuCrrEZ45WSFvST%2B3Lj1%2FQkwHZ3DhM%2B8anFQfyfY%2Bg41UHMpbkZ%2BgkoUHqmtd5d1kjs9HfFVVksuRIaZFFuMTMq9XTuNjRM9ScwlwKjifXtMWDZgXzMYKuMTc1QgYgC3G0jaAkJ0xLxzzu%2BNAJHOF5ZWPY75hvNBjCzUSvf46MxB7qXZVv4TZnV0B9jldQimy7U1JRsq0k4&X-Amz-Signature=ad3c5de78abb308f1e34c88a14ec0d3c2b930832dc35bbdf5693eaa5de4ecff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YQFH2R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw7ae3%2FulVREgVVDMq%2FI0K54m6LkT4xHYxfAq30HnfpAiEAuFJt%2FZpPjXBofnIgrEJURH56KtQCLc9Oz0dxzADMRLAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNY0ZyxIYDqcYcN8uircA156w3O835fxkhHwOf5UhqDdeoSLjDNL7v6sy6GR1u1qLGPd7G%2F340w7uQnCRCpxb7VOClYtjBvjYbUyqnhxtmlzrqGZxvHDiHuiAjmaFhiFk6g9BFdf63PUN8dDXSvj2tFm7RUMiuODvKaE4NcUED4KHVcgK0lHVlAdLbOekYoQPryw2LotfMPyefWO5tC%2BqK5rLnIJrV6KinKWka%2FN1tWTqM%2B5C3mG8IZyyR753wfZ%2FYqAHWVypt6r0MI2nfp%2BZttUc1VXRoCAgACrGE518TnVvwG1gcMN8i0HeUIOgDJOSi43D5m0OTFzccaZA%2BntkhD%2B5DIFtgpbh9Edh5pFbZp6ghaHWoBNK%2BBFiqGNDohqRXqC2xzX1ob9k9aLsKSz5%2Fm%2BnKl9uzcAb15s9nOuCvQ%2Fap3p0F4WXjA7NpmZeIPQgB2UmS4Fxks1gCTIFbK5bEf37Y9STTdD5z3YfbuFOyrSsbjWiqmJAqdMXExsydwdrM%2FTPh%2BYWBWFUqqh29CerKEW1ezN8b78uGzKw3mVJzXT7A08j9bXU%2B9jd%2BAqmz1ZQ4Z3eZ8WBFiYd3jIYzYX%2B1hmYxHndHReIekFsRvUc2JiNl%2FtzSUxJ4Ns5IFC8dcMMt4sCISQv8c%2FuLGQMPHwicoGOqUBFFX6wiy8gf9Y8AdxepuCrrEZ45WSFvST%2B3Lj1%2FQkwHZ3DhM%2B8anFQfyfY%2Bg41UHMpbkZ%2BgkoUHqmtd5d1kjs9HfFVVksuRIaZFFuMTMq9XTuNjRM9ScwlwKjifXtMWDZgXzMYKuMTc1QgYgC3G0jaAkJ0xLxzzu%2BNAJHOF5ZWPY75hvNBjCzUSvf46MxB7qXZVv4TZnV0B9jldQimy7U1JRsq0k4&X-Amz-Signature=46f113a86b52d08bab3556065d01f812e3cff58cbb9848d174641f863e7756bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

