---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQ2A5P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ2NdDaWKxYjToku5%2FkoXsy0Rg7auW%2FG2hjYeWmxrAFAIhALJ83j7KCMrd3Ov9Tj4K6HrMCJdPPSrYLg6QzkuWc3Y7KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNVxxg0hwZtDwy7S0q3AObnbCt3PDg2s16NTbv%2BZIxilbqZUbD%2BKqRWIm3Vtf6NO0ElQsrnV1f5ZQ4DIx6C6%2FjNe1bLH080on0IMHjDdHaADCoa%2B%2Fbg9JKBfXF8dGkmQnBF0W%2BBxFnmUZHiXXS2dqQPxAbUzhWSGVHX6AbzH9ywR8jiSZ%2B2RlQ%2B0KaIlJhphGB8YZHvZ6ylq9%2FjsIYAL4AQeKds4UBRKIjQdkv8FTmsxOcZ91DzQUKYchV0GLXCE6bWRCdc3ewZzSPu%2FU0B61mGDXK%2BxjMs4iJxHvoLO8ab6OAq0fZgcVdqTyXbVRimRyCiugl%2FYHYQenliRAdUUoyWYTa%2FQ5BNSq7TNzETf4B7zID6UFQgMaceisJj3frgoWW7ArGWZzKThgOx3aK61N%2BrjrLOOtcWKvdt7Fner7QheN7yq%2FdencwBoo9aSVHrbDed6%2BARBJMz%2B0FcvXwhn%2FGU0Th0kq%2BKw8WlAxs4yolApXvHIKpuQH1%2FFKyH2WlCi%2B%2F6sdDa857iqN56vzxmyGPLEHLqeZMe32rcTrS6HTWA69DBY7iat8t4AriuOD6WId2ByDTUvQdSiXq0H1OmAgiQk4IgGLvECA5WrcT1voefLdgbnILtnAAML6msWwZAWYcsK6F8crUMvnIszCm3NzJBjqkATIKMZdce3VZyQdjejV0jw%2BrvWQBFAeNcWomTmrbgsL4wpT2xi5NOMdslWaxTk%2FFt90qRxUoGVMivKDmoW%2B0NhwmgHQ%2BKUKeQeanEifyW%2BDCsm3Lv6XnaF%2FymgdF1epA7%2BedW4%2BD3HSqAG7kJ%2BQTFBUSSt0CRRSeI6pew5qDQ%2B%2BU6O7PLbXTN%2BeBfRSxbh1%2FoW0VsIofqkYCTHyebXZ2YW6VMLrJ&X-Amz-Signature=e4fc736bd7277dfecfa9957e99043d0010dc1d47680ea92f4d022285c78313d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQ2A5P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ2NdDaWKxYjToku5%2FkoXsy0Rg7auW%2FG2hjYeWmxrAFAIhALJ83j7KCMrd3Ov9Tj4K6HrMCJdPPSrYLg6QzkuWc3Y7KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNVxxg0hwZtDwy7S0q3AObnbCt3PDg2s16NTbv%2BZIxilbqZUbD%2BKqRWIm3Vtf6NO0ElQsrnV1f5ZQ4DIx6C6%2FjNe1bLH080on0IMHjDdHaADCoa%2B%2Fbg9JKBfXF8dGkmQnBF0W%2BBxFnmUZHiXXS2dqQPxAbUzhWSGVHX6AbzH9ywR8jiSZ%2B2RlQ%2B0KaIlJhphGB8YZHvZ6ylq9%2FjsIYAL4AQeKds4UBRKIjQdkv8FTmsxOcZ91DzQUKYchV0GLXCE6bWRCdc3ewZzSPu%2FU0B61mGDXK%2BxjMs4iJxHvoLO8ab6OAq0fZgcVdqTyXbVRimRyCiugl%2FYHYQenliRAdUUoyWYTa%2FQ5BNSq7TNzETf4B7zID6UFQgMaceisJj3frgoWW7ArGWZzKThgOx3aK61N%2BrjrLOOtcWKvdt7Fner7QheN7yq%2FdencwBoo9aSVHrbDed6%2BARBJMz%2B0FcvXwhn%2FGU0Th0kq%2BKw8WlAxs4yolApXvHIKpuQH1%2FFKyH2WlCi%2B%2F6sdDa857iqN56vzxmyGPLEHLqeZMe32rcTrS6HTWA69DBY7iat8t4AriuOD6WId2ByDTUvQdSiXq0H1OmAgiQk4IgGLvECA5WrcT1voefLdgbnILtnAAML6msWwZAWYcsK6F8crUMvnIszCm3NzJBjqkATIKMZdce3VZyQdjejV0jw%2BrvWQBFAeNcWomTmrbgsL4wpT2xi5NOMdslWaxTk%2FFt90qRxUoGVMivKDmoW%2B0NhwmgHQ%2BKUKeQeanEifyW%2BDCsm3Lv6XnaF%2FymgdF1epA7%2BedW4%2BD3HSqAG7kJ%2BQTFBUSSt0CRRSeI6pew5qDQ%2B%2BU6O7PLbXTN%2BeBfRSxbh1%2FoW0VsIofqkYCTHyebXZ2YW6VMLrJ&X-Amz-Signature=d1c5978b80220ecae8f0dca4320ebba047bbb3fe9dc8e9e406b765916385a180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

