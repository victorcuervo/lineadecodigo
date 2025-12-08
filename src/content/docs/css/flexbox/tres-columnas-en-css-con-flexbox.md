---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWNZZSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp9ByvkvfZLqK7EUhBN%2Fe2TWnY0UZgDxHzq%2F14r%2Bx4TAiEAyDjJjH0BqM0j742%2FWsigACnQQVW1r5hnAxpmLYpSjFsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydoW0HMDj7KSkN0ircA%2BQw5GNt6SLUIxa9G1QOK%2FDvluorvk1gQE7Wn40votzqb8X8dPdC91DHCeCxgMJrQ%2F2O6ZgxccBWoQeEzIVEfIWU1STaHzpSoiItuCq4JZHBzDmSauOwZjmZOrXFF0gmrxt%2FNzJ4Z6PFRrm0l1Lp5upZc5gEAM5VLqwIbJEXV90pZItGT%2BkzjMfdziP45hrZ3opsLDOG6fPLWI1Axk4J6teDev40TPlFQlQnzeCKuhDrqkOf5R22vDd4hh3wKv%2FM0wXpoa68mOWxnN6SRVJ6nwRwY2Z%2F0mO9XiRlgWJnuEMe4LT1kVhNsjbbey0dxVs7Td4PvQ6B7ReE744FdDLnluUYc67fuh053rMTeEnvBSJDd%2FifnXWQHH9aDoipLgeS8gDgLUGU8%2Bq4QjVZ4xOriQ4sp7Gr8xEHRNAXbgth2y0R3W8D1uyMKMaOmS4wB9QqUAykCyLHyxqicyFPqNos1cpf1MJUIi3a23DJQMROcLQEJMG4H89E0Kg%2B1gbqt%2B8OB1Q5XJ74Os9%2Bl%2Fy9TaT3f5iUH%2BI9uNyyDdntcDQ%2BhBGerpgr1uVFCKIeRo9rhcFt0nsEqmcVcnP0rBi6XMg3%2BvMijzqVXgCzbe7%2FsBt6WWqlOqDdW3FaP0uN6VDeMJ3Q2ckGOqUBnwr0yW82A%2B%2Bf5Q6OBSX8ivvyrVUpR4woJBZDCygBM90dfEP73XEbiqKJ0NCgqadhwSqdHTJQNzLCVlICiGgZkh3%2BbuVty%2BdHybTCT8%2BwytIP%2B%2F0OJVYyelzPaH7cYAQjKxXtpozAuH0PLD9xGGHzrbCACKTJtG%2BgR4NLm9VOj2YS8iWOSpk2vMwVF9FqXGykKKmfKUU0yqUNizRQLq5uxYZuw1xv&X-Amz-Signature=00276dbcb2955644678dbec920e8f8937604146846f76d3336d6578069adfce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWNZZSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEp9ByvkvfZLqK7EUhBN%2Fe2TWnY0UZgDxHzq%2F14r%2Bx4TAiEAyDjJjH0BqM0j742%2FWsigACnQQVW1r5hnAxpmLYpSjFsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydoW0HMDj7KSkN0ircA%2BQw5GNt6SLUIxa9G1QOK%2FDvluorvk1gQE7Wn40votzqb8X8dPdC91DHCeCxgMJrQ%2F2O6ZgxccBWoQeEzIVEfIWU1STaHzpSoiItuCq4JZHBzDmSauOwZjmZOrXFF0gmrxt%2FNzJ4Z6PFRrm0l1Lp5upZc5gEAM5VLqwIbJEXV90pZItGT%2BkzjMfdziP45hrZ3opsLDOG6fPLWI1Axk4J6teDev40TPlFQlQnzeCKuhDrqkOf5R22vDd4hh3wKv%2FM0wXpoa68mOWxnN6SRVJ6nwRwY2Z%2F0mO9XiRlgWJnuEMe4LT1kVhNsjbbey0dxVs7Td4PvQ6B7ReE744FdDLnluUYc67fuh053rMTeEnvBSJDd%2FifnXWQHH9aDoipLgeS8gDgLUGU8%2Bq4QjVZ4xOriQ4sp7Gr8xEHRNAXbgth2y0R3W8D1uyMKMaOmS4wB9QqUAykCyLHyxqicyFPqNos1cpf1MJUIi3a23DJQMROcLQEJMG4H89E0Kg%2B1gbqt%2B8OB1Q5XJ74Os9%2Bl%2Fy9TaT3f5iUH%2BI9uNyyDdntcDQ%2BhBGerpgr1uVFCKIeRo9rhcFt0nsEqmcVcnP0rBi6XMg3%2BvMijzqVXgCzbe7%2FsBt6WWqlOqDdW3FaP0uN6VDeMJ3Q2ckGOqUBnwr0yW82A%2B%2Bf5Q6OBSX8ivvyrVUpR4woJBZDCygBM90dfEP73XEbiqKJ0NCgqadhwSqdHTJQNzLCVlICiGgZkh3%2BbuVty%2BdHybTCT8%2BwytIP%2B%2F0OJVYyelzPaH7cYAQjKxXtpozAuH0PLD9xGGHzrbCACKTJtG%2BgR4NLm9VOj2YS8iWOSpk2vMwVF9FqXGykKKmfKUU0yqUNizRQLq5uxYZuw1xv&X-Amz-Signature=d9562e791ab4c51386aced431be7ec47bc80539d62c5fa339710d29934800b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

