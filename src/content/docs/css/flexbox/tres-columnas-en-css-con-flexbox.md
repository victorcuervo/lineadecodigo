---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TAFDEVH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbrnKNka7D%2BZosVsB30naYamndKCVXPuM%2F5D1ALsLK4AiEAsdEMpOGUd8%2BQ1dXhDPNH%2FqRdKhtAcxO09V8nx9aOxO8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJHASFTJAFozzv4xzyrcAxlJDCDomCK%2BuoXhNoIFl7srCPdOQh2dhXC7D4I7UUxFLLnQuUPCFyCP%2FWUbuetifLzEFZ72OlQaKUpbVb7cN19x86K7h3kc0ZtofETyfscMAMQBE7gN5%2B52sGFzyobwz2fCbfuYrvTIojU%2B9OPCbA5SgYDOEGhIsiNKqxwg%2Ftkfxq56dc7KOmH4W8IZ2WsnSlm9%2B1GHA1wd%2FR2NL8k5X%2BJ4KH4wZR9CcaosG%2FEkg0o4crJvr76KwYoX35sWmDmGTBVxaEfEQYl6ZWI7qsgXEQlqHiDjwW8Im90uJ8cGACZiFb%2B42KsbyobUrywB7VYWJCtmWaFZboKtMqDV4ngcJdmgf9f90QuhgYFrbpXZwHKmFM3WbXeQ%2BdjOvC7yAhXo6a%2BQjYfvVNS22gYG%2BzJRHsq9SYXgoqo2K8bgJmnyRpOC%2FHgunr6l%2F4SknUXwx%2Bmk6GfYrbtNKdfgp%2BXAdtkq6fap3hn7QRI%2FY9X%2FURMIVSooidO8uTPPyYgZ5J3yHzw749I%2FJxbcAR370baH1CDXpv3nFZItC4X9SZfh3hlXYlmddz2B2Ufn5gIzuPbzA7HGwLyilL17jyQXfn%2F9h9jiekea2GLFVKLRLHAFB%2BBDttflLpQSdky4Us0FdqSkMK3U0skGOqUBbTA1Avw3s7dxSJnaHoE6ZqS05QnDhXan8cP0LstZ1F82%2FkNrKAblezTpW3iV2lYtx1CYtqW8RJvuDNxDTPRR%2Bc%2BwDFeWrUp0dJY5rrxrUlWekuRUXXgd8FkGna8XLiuun%2BFr3vouyw316QyUs3UkBWAFkxCAqIxUxGVDIeTavkhKgix8dECzwl%2BI09JYl7wyie6eF%2FPHqBlT4jhb6K4PMaAJZprF&X-Amz-Signature=da13bf355377e6e197a8a5a3356cee0d3bf65d09a4c12085cebcb1edc8e947f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TAFDEVH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbrnKNka7D%2BZosVsB30naYamndKCVXPuM%2F5D1ALsLK4AiEAsdEMpOGUd8%2BQ1dXhDPNH%2FqRdKhtAcxO09V8nx9aOxO8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJHASFTJAFozzv4xzyrcAxlJDCDomCK%2BuoXhNoIFl7srCPdOQh2dhXC7D4I7UUxFLLnQuUPCFyCP%2FWUbuetifLzEFZ72OlQaKUpbVb7cN19x86K7h3kc0ZtofETyfscMAMQBE7gN5%2B52sGFzyobwz2fCbfuYrvTIojU%2B9OPCbA5SgYDOEGhIsiNKqxwg%2Ftkfxq56dc7KOmH4W8IZ2WsnSlm9%2B1GHA1wd%2FR2NL8k5X%2BJ4KH4wZR9CcaosG%2FEkg0o4crJvr76KwYoX35sWmDmGTBVxaEfEQYl6ZWI7qsgXEQlqHiDjwW8Im90uJ8cGACZiFb%2B42KsbyobUrywB7VYWJCtmWaFZboKtMqDV4ngcJdmgf9f90QuhgYFrbpXZwHKmFM3WbXeQ%2BdjOvC7yAhXo6a%2BQjYfvVNS22gYG%2BzJRHsq9SYXgoqo2K8bgJmnyRpOC%2FHgunr6l%2F4SknUXwx%2Bmk6GfYrbtNKdfgp%2BXAdtkq6fap3hn7QRI%2FY9X%2FURMIVSooidO8uTPPyYgZ5J3yHzw749I%2FJxbcAR370baH1CDXpv3nFZItC4X9SZfh3hlXYlmddz2B2Ufn5gIzuPbzA7HGwLyilL17jyQXfn%2F9h9jiekea2GLFVKLRLHAFB%2BBDttflLpQSdky4Us0FdqSkMK3U0skGOqUBbTA1Avw3s7dxSJnaHoE6ZqS05QnDhXan8cP0LstZ1F82%2FkNrKAblezTpW3iV2lYtx1CYtqW8RJvuDNxDTPRR%2Bc%2BwDFeWrUp0dJY5rrxrUlWekuRUXXgd8FkGna8XLiuun%2BFr3vouyw316QyUs3UkBWAFkxCAqIxUxGVDIeTavkhKgix8dECzwl%2BI09JYl7wyie6eF%2FPHqBlT4jhb6K4PMaAJZprF&X-Amz-Signature=255add66d5691c19ded7da39990b5fa484449c3488734af062c7cb0c58c9fc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

