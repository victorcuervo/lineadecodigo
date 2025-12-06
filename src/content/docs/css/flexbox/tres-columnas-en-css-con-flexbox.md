---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IAEH2UY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUtK4kYGSje4cxZbELmZuhLhQsdv4WWMhHgWaPSFFkqAiBDqbfQ9KY72uVLBbL630871wOaORGdOvrxyfSFPM40Qir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9CRUNW6u%2BRQMI%2FD8KtwDLWwiCVmSO%2BmIsdQzGrtuyJKLeBLjJjtyHV%2FHUkijZ0k587jZHvWwb4Kq5DrdGe%2BG0O0NSiJ2uRj3PasP0skStr993oL%2BhRpGrSVJloOptJKDttxPIUOuo%2BtG5XdNJcWQ9xMdh1fbMXQQ4Nh3au7rxycchhCVwAEheFP5xnlXUuOEjGDlUqsXrvBJcb61%2FKxy5xi8z4%2BLqZgWw8HMJspW8MYHW54WVBJt2aHR7QakD7HS0ArpV5pqdi7uz6ieA6zZ1Hv2ggRe0hrTAFTBj9SXVDq71WixSCVUghtTos5mTkZ%2FVmpYwwUrq2idYTgwmSZ5Y2HwkVN8znWSSPvAiJaKDHpuJ%2FoY4HpMfl9RrPDYvsjH%2BZpobPR2I24jkpiGNcy1SvC%2FYAcIcRHiDkJzF6ySbv%2FlWIHJF8IUM76xEWcxM%2F3mmbsSQK9hCo7fAVsU%2F9mke3eQ6VlE6N9teqX4J8sBNkMPt7V3DfQD0CKgKqPeNCyKX5NF2AAN%2FFDEnrgBnjGFzMzJhMxeyMLsY1XYYtmWwY0IIQCJLlouKAgqwOkA0AGM9avGpVGg5Y%2B8HgNX7UOxj8ac8mKspajKcl9MmPL5fxhrcLl8jvRW8N%2BQOo%2BGBIgdtuZdju%2F556v6%2FYwwxrzPyQY6pgFvplKk%2Byp0HL3%2BK%2Ba5KRoUIqoD1eDibBfJx24OP6j9G8Td%2F8cmOwgLbPmsfW8fepAjvOU1iLDWp6V16fVc6YT2OmkrWQ76XaW%2FOuCitnzf50sb%2F63gubFdO6Npf9jERi2lZkWMHjpyzRtalSwgQwHV6lBIrLCw4jrAe3tHEYf2JYiyTYbrJbf3ylgkek6z0Ey513qgEYjIDU9ZWrOhkXqWoZYpM3u6&X-Amz-Signature=ea2b894a4cafe2e1feb8d3f391872a0d7e3330ecaefc8d9a7d28ccb5116fc983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IAEH2UY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUtK4kYGSje4cxZbELmZuhLhQsdv4WWMhHgWaPSFFkqAiBDqbfQ9KY72uVLBbL630871wOaORGdOvrxyfSFPM40Qir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9CRUNW6u%2BRQMI%2FD8KtwDLWwiCVmSO%2BmIsdQzGrtuyJKLeBLjJjtyHV%2FHUkijZ0k587jZHvWwb4Kq5DrdGe%2BG0O0NSiJ2uRj3PasP0skStr993oL%2BhRpGrSVJloOptJKDttxPIUOuo%2BtG5XdNJcWQ9xMdh1fbMXQQ4Nh3au7rxycchhCVwAEheFP5xnlXUuOEjGDlUqsXrvBJcb61%2FKxy5xi8z4%2BLqZgWw8HMJspW8MYHW54WVBJt2aHR7QakD7HS0ArpV5pqdi7uz6ieA6zZ1Hv2ggRe0hrTAFTBj9SXVDq71WixSCVUghtTos5mTkZ%2FVmpYwwUrq2idYTgwmSZ5Y2HwkVN8znWSSPvAiJaKDHpuJ%2FoY4HpMfl9RrPDYvsjH%2BZpobPR2I24jkpiGNcy1SvC%2FYAcIcRHiDkJzF6ySbv%2FlWIHJF8IUM76xEWcxM%2F3mmbsSQK9hCo7fAVsU%2F9mke3eQ6VlE6N9teqX4J8sBNkMPt7V3DfQD0CKgKqPeNCyKX5NF2AAN%2FFDEnrgBnjGFzMzJhMxeyMLsY1XYYtmWwY0IIQCJLlouKAgqwOkA0AGM9avGpVGg5Y%2B8HgNX7UOxj8ac8mKspajKcl9MmPL5fxhrcLl8jvRW8N%2BQOo%2BGBIgdtuZdju%2F556v6%2FYwwxrzPyQY6pgFvplKk%2Byp0HL3%2BK%2Ba5KRoUIqoD1eDibBfJx24OP6j9G8Td%2F8cmOwgLbPmsfW8fepAjvOU1iLDWp6V16fVc6YT2OmkrWQ76XaW%2FOuCitnzf50sb%2F63gubFdO6Npf9jERi2lZkWMHjpyzRtalSwgQwHV6lBIrLCw4jrAe3tHEYf2JYiyTYbrJbf3ylgkek6z0Ey513qgEYjIDU9ZWrOhkXqWoZYpM3u6&X-Amz-Signature=9860e5cc76c6663169ca7811e332ecf3f99e56289ee9a7ee37d3f878be1e57f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

