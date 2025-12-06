---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJACUC6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0S3bc7lZ88%2BEkvX8kGVzZsByRbumZ%2F83aBDEwN8GLBAiBEiCMjANHBbKkh%2Ft1KABtufhGttAmXFu6zQa90H3UHiCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMD%2Ft5IZ4Ry2gRXS4BKtwD%2F3aEsFIHdUAZVusECm0bpCW1WpaC4rhOxi8U8tcA%2BlEvTjaMwW6cj05pOw%2FNQL5y7QlT7WLa6tp%2B2nr73fnMdDsigph84DgNpgdaLqP9GCQJ5jVs1JL2Q02vyn6MbVJDTDhWjBi7%2B0w%2BbCQB83KcCe7NQLnlPsVaiCzF8NKukXTigpfVyJok6Hesj8iR2%2B%2BeIqV5cZ8akO%2F0Th%2F5KXN5gI5A2nfN2UOMVgGh6VZv7fFlkNGikTwYUoy1Py%2FhMfMP6rYuSi5ahGcwEv1O1QgyvPQE6In0ZSfAWjq3fhyH5UYDD7WoDltfPkOMAKb9AMoCiXYtzsLqwZCEYUIxHDfMCZVggoyBClaDxAt9YwLe%2FMBh23X%2FcwJtlrQ853HylQC7vdMER4%2BpkxqeA8KBAQPYRpPWNVcmiaHOXwFm1J0Su%2B9LoEYyr1oGbEql8UIOxoRUU8AYa9yun1mUlzoaYyCvD3S1n9lke0tIeKZC3Gh7rFyFlw7EJSm03344Qrba0SMll5neBIcxCisl1pc4C1eauJYU9yxD6KcVZlrYzHsDZnr6pkW4m7aD8zD0wlX9s%2F7kMRB%2FZKDMkBNEg1CcLKEPU0HCZhq9fRoN%2Bf%2BAerMzFDGwt0xXpHAOCLOipu0w5abQyQY6pgEEsV3zWzoNKzJAywSPZ4sMQspaibyi0jlkF3LKUO0UOmcLYcRZsMPoqw0X51zsf9iGfTz6JZZ9b4tRk0HDABJhl42uTtisbIDDovZHLZtYDvPrf9UALmqjqOIFdhEdQvSTM%2FA4uxli6wimFIIhp37wGSShTxpOu7KdC7Y92XE1y7I%2FS%2F6Y42F0JABGVgc%2Fx4h6EWyVrwQ3eGy%2B3AOSHOadqT9S2Kie&X-Amz-Signature=781b92399ec9ac498d1d5ae0b835d4591f12528e73d2a0daabc844db4d81b671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJACUC6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0S3bc7lZ88%2BEkvX8kGVzZsByRbumZ%2F83aBDEwN8GLBAiBEiCMjANHBbKkh%2Ft1KABtufhGttAmXFu6zQa90H3UHiCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMD%2Ft5IZ4Ry2gRXS4BKtwD%2F3aEsFIHdUAZVusECm0bpCW1WpaC4rhOxi8U8tcA%2BlEvTjaMwW6cj05pOw%2FNQL5y7QlT7WLa6tp%2B2nr73fnMdDsigph84DgNpgdaLqP9GCQJ5jVs1JL2Q02vyn6MbVJDTDhWjBi7%2B0w%2BbCQB83KcCe7NQLnlPsVaiCzF8NKukXTigpfVyJok6Hesj8iR2%2B%2BeIqV5cZ8akO%2F0Th%2F5KXN5gI5A2nfN2UOMVgGh6VZv7fFlkNGikTwYUoy1Py%2FhMfMP6rYuSi5ahGcwEv1O1QgyvPQE6In0ZSfAWjq3fhyH5UYDD7WoDltfPkOMAKb9AMoCiXYtzsLqwZCEYUIxHDfMCZVggoyBClaDxAt9YwLe%2FMBh23X%2FcwJtlrQ853HylQC7vdMER4%2BpkxqeA8KBAQPYRpPWNVcmiaHOXwFm1J0Su%2B9LoEYyr1oGbEql8UIOxoRUU8AYa9yun1mUlzoaYyCvD3S1n9lke0tIeKZC3Gh7rFyFlw7EJSm03344Qrba0SMll5neBIcxCisl1pc4C1eauJYU9yxD6KcVZlrYzHsDZnr6pkW4m7aD8zD0wlX9s%2F7kMRB%2FZKDMkBNEg1CcLKEPU0HCZhq9fRoN%2Bf%2BAerMzFDGwt0xXpHAOCLOipu0w5abQyQY6pgEEsV3zWzoNKzJAywSPZ4sMQspaibyi0jlkF3LKUO0UOmcLYcRZsMPoqw0X51zsf9iGfTz6JZZ9b4tRk0HDABJhl42uTtisbIDDovZHLZtYDvPrf9UALmqjqOIFdhEdQvSTM%2FA4uxli6wimFIIhp37wGSShTxpOu7KdC7Y92XE1y7I%2FS%2F6Y42F0JABGVgc%2Fx4h6EWyVrwQ3eGy%2B3AOSHOadqT9S2Kie&X-Amz-Signature=c60aecde1f6c538de89ab4739cef7ec97279d04a32bec36db8d7df3b23d3cc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

