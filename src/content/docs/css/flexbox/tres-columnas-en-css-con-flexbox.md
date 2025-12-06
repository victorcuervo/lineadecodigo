---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAC4DBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClC8Agp7pU2cVWTE3sNwy%2FQOZ0aVxtATC5hkl4LDwumAIhAP8Ell4Pkh5oLi7ZUJssZmbT3drrJSj7%2B%2BVdojYM7rgQKv8DCHoQABoMNjM3NDIzMTgzODA1Igw0ArkNNvWcMoI4mKoq3AOpiemVMKHTDbSM6pi0q7OrHcjrtwqfNUREONFIJvAQo1s5Xv4D%2FUn1vvnTq%2BY%2BFGcwHrmKgLSPExwbGXPj1iKkYbK0gG%2Fm8gdzoREqV01MH1yAeu8V1fxsv2HAQ3aUtVcFPpbNqFtqlYKYlRK2bQDz8YigM0q5VE1tt0hXyXauywCxQQDBL%2FOD2EG3PyHvXnMpCRjGtXEWVk79P816OrD4%2FNsryvJHwNocavMjSNBmArobQpv6MAFRR8IpM0Z0p2BLRhIa2GbO4gmgsoDsbV2mB0ruYXuAU%2BNUmGa27DJRwXGfxqpbrrbBtFb%2B0YY%2F88MkPnYesX7nyGdJzzxxm0DkgSiZ0HYeHf17F%2B%2FvnJq7EADVqb5I8hWJUk9gRXYHOpy1bdlO3IIOg6U5TP4%2BlSFWWcnB60%2BuhZifehcG3oEwQ6PIvaDgiBOUgU4bY72AbnhAFzWkagHWWFTpOpgsbScNIBRzsFiLaDKlDhC74pgkdIfZLVXHhTJnKXdD%2FO6TX1FIC%2BuNv1q%2By6aFKBQf%2F0jnosYnbS3m26xKcUM8iXjfdIfATXcnu5tPpBZD5pibujT5xfTuPm9w39dieeizKC%2F8zI31L0FLlqymlR5Am4oPfiHAIIcHjWQblRLIEzCgy9HJBjqkAegOaJbV1HaZj0%2FU6jptu5R57z1UwxASZzkMZ1Kcb0azg9r%2FTYsa89wDrSJXUyISYx7u0grJ%2F0MaEYOlEe45FhnmKEPfVFPlgczLdkmQdyVESteYd5%2BTIcYtJ6F3U%2BSeUY%2FdEapRZV%2BREKCq1XIuFVA082xlC6%2BCcHa8zaiJnnIbHcYQdP2B4nd7c4WUylmgiG72osZD4wyg7cAuMwu6o9dF5LgY&X-Amz-Signature=2679edc0b98841c5e9558121d751f16535b9af145ac897256dd7e5c5fd056455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAC4DBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClC8Agp7pU2cVWTE3sNwy%2FQOZ0aVxtATC5hkl4LDwumAIhAP8Ell4Pkh5oLi7ZUJssZmbT3drrJSj7%2B%2BVdojYM7rgQKv8DCHoQABoMNjM3NDIzMTgzODA1Igw0ArkNNvWcMoI4mKoq3AOpiemVMKHTDbSM6pi0q7OrHcjrtwqfNUREONFIJvAQo1s5Xv4D%2FUn1vvnTq%2BY%2BFGcwHrmKgLSPExwbGXPj1iKkYbK0gG%2Fm8gdzoREqV01MH1yAeu8V1fxsv2HAQ3aUtVcFPpbNqFtqlYKYlRK2bQDz8YigM0q5VE1tt0hXyXauywCxQQDBL%2FOD2EG3PyHvXnMpCRjGtXEWVk79P816OrD4%2FNsryvJHwNocavMjSNBmArobQpv6MAFRR8IpM0Z0p2BLRhIa2GbO4gmgsoDsbV2mB0ruYXuAU%2BNUmGa27DJRwXGfxqpbrrbBtFb%2B0YY%2F88MkPnYesX7nyGdJzzxxm0DkgSiZ0HYeHf17F%2B%2FvnJq7EADVqb5I8hWJUk9gRXYHOpy1bdlO3IIOg6U5TP4%2BlSFWWcnB60%2BuhZifehcG3oEwQ6PIvaDgiBOUgU4bY72AbnhAFzWkagHWWFTpOpgsbScNIBRzsFiLaDKlDhC74pgkdIfZLVXHhTJnKXdD%2FO6TX1FIC%2BuNv1q%2By6aFKBQf%2F0jnosYnbS3m26xKcUM8iXjfdIfATXcnu5tPpBZD5pibujT5xfTuPm9w39dieeizKC%2F8zI31L0FLlqymlR5Am4oPfiHAIIcHjWQblRLIEzCgy9HJBjqkAegOaJbV1HaZj0%2FU6jptu5R57z1UwxASZzkMZ1Kcb0azg9r%2FTYsa89wDrSJXUyISYx7u0grJ%2F0MaEYOlEe45FhnmKEPfVFPlgczLdkmQdyVESteYd5%2BTIcYtJ6F3U%2BSeUY%2FdEapRZV%2BREKCq1XIuFVA082xlC6%2BCcHa8zaiJnnIbHcYQdP2B4nd7c4WUylmgiG72osZD4wyg7cAuMwu6o9dF5LgY&X-Amz-Signature=c1dc9969e847e95cf76ce30d91c9eee1b21df755a88727bd0c13e627b5c8d1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

