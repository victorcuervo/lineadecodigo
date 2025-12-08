---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD2YELE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPgRPAlbXHHORQhKce4UevRoeAL9z%2FMCOn4h2fBQYbLAiEAipCVEnPMTskqF5lW19HcKB14F68g%2Fx%2BV0%2FQaUk1pHOoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKIYL69CDibOooj9yrcAyhdj%2FpjRU4y7W7QpTu10%2FOXCxNGBrifP6TRu5h%2BjgYGtxKn7wklTcKLum782oe3lNZO1DEB3N4ozqYerNWzySSKz0HT9ukrRPSYeI3wbsgb3qHHqpycPbvT0VomCUmQFbS6hGfpE2K6az8uCLGkmmLIzyUov5Woh7ljicqZVDTF54VsK9SqMXZIkOHp7VWv3alM1ZZtLy8cFeT8T7P96tRTiaohHXLTrmlib7h%2B0hpd5fqCG2VPGgppoO%2BldsocKxhlfiTIts%2BmguEfLZZ4VT2uoUL813QBJ6av7RK5SxCcgcqQdhpz9QM0gdc27T%2BhMUm5s6uXp9LNQNXaQWKtQcDwzwiVs0mM7GENFx1NU1%2BoI5wDKCWu%2FA1iQpq56nsk2aA12xbECii3fCi41P%2BHJKs61Z%2Bd7XlUWC0ygdcNRULB91nVH%2F3JbtJQcj9N5EXB0bjFoX6cU1pmrNAvqlEw9I5TdzRHLTmpYZKsrQCFrMGcGmdW%2FV3QcB7A286nSuDIdBYADd6xQ3TagdWMZO38M5DJ1Cu4g2C%2BQpPrv078a5n0HAa5PM1caGgAO%2FX1MUFA04aKsOr6Q3FQjzrAHHCa4n1hqvvy7yU%2B7v%2BCJe%2ByjlZINtovJ5YT6s2GESerMOjB28kGOqUBeNSHxbAeO0qpfXAtV%2BgG3e5P%2BMtmdPVjq958gb4jqm2I8PU1XYA%2BRpSMMt%2BNbwl1YOf%2BAiUPytj105DknAQlCbLZ6peA2lJSCda3NPYUb0nWIQ05wH8fU7LLV%2FqxsBx%2B0h1lkL9XJNPiI%2Bqf4E69%2FhjCs9FaVCoT878RLaADzgT9c6THeEn%2Fiw0ygoTvCm9sUQQqHg3q9BiWmR3%2B%2FKkOAG3dv44N&X-Amz-Signature=16ba0d6faf479f4db8506dc6f82bbb8eec66b4a23bcb4e7ee59df38a3c3838d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJD2YELE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPgRPAlbXHHORQhKce4UevRoeAL9z%2FMCOn4h2fBQYbLAiEAipCVEnPMTskqF5lW19HcKB14F68g%2Fx%2BV0%2FQaUk1pHOoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKIYL69CDibOooj9yrcAyhdj%2FpjRU4y7W7QpTu10%2FOXCxNGBrifP6TRu5h%2BjgYGtxKn7wklTcKLum782oe3lNZO1DEB3N4ozqYerNWzySSKz0HT9ukrRPSYeI3wbsgb3qHHqpycPbvT0VomCUmQFbS6hGfpE2K6az8uCLGkmmLIzyUov5Woh7ljicqZVDTF54VsK9SqMXZIkOHp7VWv3alM1ZZtLy8cFeT8T7P96tRTiaohHXLTrmlib7h%2B0hpd5fqCG2VPGgppoO%2BldsocKxhlfiTIts%2BmguEfLZZ4VT2uoUL813QBJ6av7RK5SxCcgcqQdhpz9QM0gdc27T%2BhMUm5s6uXp9LNQNXaQWKtQcDwzwiVs0mM7GENFx1NU1%2BoI5wDKCWu%2FA1iQpq56nsk2aA12xbECii3fCi41P%2BHJKs61Z%2Bd7XlUWC0ygdcNRULB91nVH%2F3JbtJQcj9N5EXB0bjFoX6cU1pmrNAvqlEw9I5TdzRHLTmpYZKsrQCFrMGcGmdW%2FV3QcB7A286nSuDIdBYADd6xQ3TagdWMZO38M5DJ1Cu4g2C%2BQpPrv078a5n0HAa5PM1caGgAO%2FX1MUFA04aKsOr6Q3FQjzrAHHCa4n1hqvvy7yU%2B7v%2BCJe%2ByjlZINtovJ5YT6s2GESerMOjB28kGOqUBeNSHxbAeO0qpfXAtV%2BgG3e5P%2BMtmdPVjq958gb4jqm2I8PU1XYA%2BRpSMMt%2BNbwl1YOf%2BAiUPytj105DknAQlCbLZ6peA2lJSCda3NPYUb0nWIQ05wH8fU7LLV%2FqxsBx%2B0h1lkL9XJNPiI%2Bqf4E69%2FhjCs9FaVCoT878RLaADzgT9c6THeEn%2Fiw0ygoTvCm9sUQQqHg3q9BiWmR3%2B%2FKkOAG3dv44N&X-Amz-Signature=faaf72eb9a60fe1c1137abed3f0cc61500094615909123b991eeed987c8b53de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

