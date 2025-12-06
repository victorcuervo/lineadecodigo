---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UVDYYVT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdZpPi3H77HkyjPJYePLnEpsrRGdE0%2FnGtTjcxuewOAAiBdjJR5gegJoJWn6VbkzNR7lAnhcRDNAYEOBRMVcuG29yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMUTTbeAhExeD45E1%2FKtwDyQIujux64yed4kdvLNtbl36%2B7sqiO0dODmL7YfX48ehL%2BFxZOCAVWorCaB1M%2BQQKy0HBcHVOREOuUtbTSBT3zvSFYP0TFmHNMs61BSo313J1ozc401p07EhUobnx2NtD1xjjIuiZ6E6l542ymw0bGnzkYp%2For90J%2FAb49hYnWjaOBouskQGgbtk1PuDfrPRe5KhC8bMrUet0xFFlk3VK87LlF5M9rxQMdiHeNUHKCVAaP%2BJX8oB12iDXhyr3AWKLXtl1jLSVPqq4IS0TYxvA6xR%2FWlvGTkXFbhgJk5qQ1%2BlJiPRhj2pZiPohMu0prbdqSjlxazdHI25%2BsS3Nn7ePs2pjwsI%2FHy8Sei%2BCDkqLYs5rjcO%2BNj6rv0JPKPqNZuKiPKgvAm4sBgxLlBQ4x%2FEDVD%2F5zhJ7i7fu9yg11Cn8wC1LoBRv3vVJ1nOJhNh2ZjaXHNkszhV%2FmJYsmdbm4i9VbN%2FGrUgB9FKm%2B1edzOy96Sbc8tOFC72tNS68orhhp854gCYVz7Ybp7AKMdMd3onXdlhChf6PmaB%2Fi1WW3UShfNHW6h6ah%2FFCYFL85NqOr8H6ow%2FDxViTZHtVppTDzbxGzcJAlcEFkKojzq4rFd1b8qDbNpuKbRdQk9vdtMIwyabQyQY6pgHrU04k3j2uZi%2FbKecRcuHfbzzs6LKqO%2FonBjN51GMAKmgWhzNJ82bN4NXQZK4TqiesDD52pw3B4yJA6HdQw61vby9f6F1QHVufGUYzSxwqLHlYssE8eaW3OycVQT94Oy%2FelynBuIFRC37h9jIpK1DYmUtF43EbjinhWJcWgF5s9hpes7HAZXVDWKYpHeYTJrJoVhjAEZcmMHXNQf0%2FXiNHEYTT7O10&X-Amz-Signature=868f32142fa5f4b99b75b535d9adddbab24f4f4e0ab6d6a296128a65f967086f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UVDYYVT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdZpPi3H77HkyjPJYePLnEpsrRGdE0%2FnGtTjcxuewOAAiBdjJR5gegJoJWn6VbkzNR7lAnhcRDNAYEOBRMVcuG29yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMUTTbeAhExeD45E1%2FKtwDyQIujux64yed4kdvLNtbl36%2B7sqiO0dODmL7YfX48ehL%2BFxZOCAVWorCaB1M%2BQQKy0HBcHVOREOuUtbTSBT3zvSFYP0TFmHNMs61BSo313J1ozc401p07EhUobnx2NtD1xjjIuiZ6E6l542ymw0bGnzkYp%2For90J%2FAb49hYnWjaOBouskQGgbtk1PuDfrPRe5KhC8bMrUet0xFFlk3VK87LlF5M9rxQMdiHeNUHKCVAaP%2BJX8oB12iDXhyr3AWKLXtl1jLSVPqq4IS0TYxvA6xR%2FWlvGTkXFbhgJk5qQ1%2BlJiPRhj2pZiPohMu0prbdqSjlxazdHI25%2BsS3Nn7ePs2pjwsI%2FHy8Sei%2BCDkqLYs5rjcO%2BNj6rv0JPKPqNZuKiPKgvAm4sBgxLlBQ4x%2FEDVD%2F5zhJ7i7fu9yg11Cn8wC1LoBRv3vVJ1nOJhNh2ZjaXHNkszhV%2FmJYsmdbm4i9VbN%2FGrUgB9FKm%2B1edzOy96Sbc8tOFC72tNS68orhhp854gCYVz7Ybp7AKMdMd3onXdlhChf6PmaB%2Fi1WW3UShfNHW6h6ah%2FFCYFL85NqOr8H6ow%2FDxViTZHtVppTDzbxGzcJAlcEFkKojzq4rFd1b8qDbNpuKbRdQk9vdtMIwyabQyQY6pgHrU04k3j2uZi%2FbKecRcuHfbzzs6LKqO%2FonBjN51GMAKmgWhzNJ82bN4NXQZK4TqiesDD52pw3B4yJA6HdQw61vby9f6F1QHVufGUYzSxwqLHlYssE8eaW3OycVQT94Oy%2FelynBuIFRC37h9jIpK1DYmUtF43EbjinhWJcWgF5s9hpes7HAZXVDWKYpHeYTJrJoVhjAEZcmMHXNQf0%2FXiNHEYTT7O10&X-Amz-Signature=2c159ea53cd11fdf2cd9c0da37f83b55052e5c98ed436c8cfc134c4611ca0e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

