---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGA5JGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr42rlUldesn8hNs4Uml%2FZ%2BQImxPEhYjI3KmvRndSlCwIgbTNDrC41Aww9ixiI5i8C7AMioXdw%2F3gjfK0r%2FfpZNqcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQ0HC%2F7l1GxcgRqyrcA4JfKO1AU5A0mT72ov71VkevTbG5IdWNDmVulIQ%2FvyNshwgv70X1LmLoAt5AaGCgQV4GaVtUI2q47GPkKSg6VQjv3M5koZv7irGnTEt2gUIcu%2BL1meR1YpLUwMdnbe3sNymaijLHrMLZTxq1hVGDt1OpSdTS7eXumMBDbOrEfQduKVbEOp1uZViFqhlffCXxALJ5sdCs61Xa844Mr4%2B%2FT%2BzKUzrJkbrJQDdyyXkpaUCQf%2BxGuxKbj20QI4MkNkvzDWSB8FqINhZ0%2F6gUX9wyaJtUKHdmI3yaMN4DiO1SykvDCu58CTNg4YndyBe%2B1ohBixB6ANOlatzJ7sT5Iq3K4ZApS6U6o1BE1jgbmg4Agov%2FWEl6DWUodey2iUdWEOyzMVhV5iVgIOZnKqjsuwvax7lRNlaMrRh37HlPdO73wx68g9wMHp2xbHyuujvxpkl7K08oZtNDoARsFlvYb469JZwd9EdLq1fw1wOPqjPJiUVbo0QRrAy8gHt4X887zS3njOJVcyiVnlJ0tiw6%2FRI%2FQc9siFrGjeOn76%2FNIonqH1hcWhaafxhqRGyX2isBg8gX2RYMPCkxbMtalPbNs77BMBtYTmYVrZWNFjJHpy5qbdHgDLG3jaDNxrVJBVS7MJbC28kGOqUBqz7gUlkDM7ZL%2BkOXJRpY7ECXz%2BianHNXk5Z8tSZCnrgdWgVbTqgX57A76aitZLLgY9KAacXhvVvTO0zF4Ra1q%2Fkv88YOX%2BEvcejFnylIzqlotsxCmnjyNeTEw%2FX5p%2FfobCYQYY%2Bjd45nDtpXc6sdLy%2B91aEz7vOqlRibE2VTK1TUjsK5Wbn6M92f%2F3uSfqi5EGSrG%2BAYTAYczA0CaUkm%2B7HCdIEr&X-Amz-Signature=93b529a9ac87cf15e38eab06e90afb3f4f2c13ba55344b283019e288cac1c379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGA5JGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr42rlUldesn8hNs4Uml%2FZ%2BQImxPEhYjI3KmvRndSlCwIgbTNDrC41Aww9ixiI5i8C7AMioXdw%2F3gjfK0r%2FfpZNqcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQ0HC%2F7l1GxcgRqyrcA4JfKO1AU5A0mT72ov71VkevTbG5IdWNDmVulIQ%2FvyNshwgv70X1LmLoAt5AaGCgQV4GaVtUI2q47GPkKSg6VQjv3M5koZv7irGnTEt2gUIcu%2BL1meR1YpLUwMdnbe3sNymaijLHrMLZTxq1hVGDt1OpSdTS7eXumMBDbOrEfQduKVbEOp1uZViFqhlffCXxALJ5sdCs61Xa844Mr4%2B%2FT%2BzKUzrJkbrJQDdyyXkpaUCQf%2BxGuxKbj20QI4MkNkvzDWSB8FqINhZ0%2F6gUX9wyaJtUKHdmI3yaMN4DiO1SykvDCu58CTNg4YndyBe%2B1ohBixB6ANOlatzJ7sT5Iq3K4ZApS6U6o1BE1jgbmg4Agov%2FWEl6DWUodey2iUdWEOyzMVhV5iVgIOZnKqjsuwvax7lRNlaMrRh37HlPdO73wx68g9wMHp2xbHyuujvxpkl7K08oZtNDoARsFlvYb469JZwd9EdLq1fw1wOPqjPJiUVbo0QRrAy8gHt4X887zS3njOJVcyiVnlJ0tiw6%2FRI%2FQc9siFrGjeOn76%2FNIonqH1hcWhaafxhqRGyX2isBg8gX2RYMPCkxbMtalPbNs77BMBtYTmYVrZWNFjJHpy5qbdHgDLG3jaDNxrVJBVS7MJbC28kGOqUBqz7gUlkDM7ZL%2BkOXJRpY7ECXz%2BianHNXk5Z8tSZCnrgdWgVbTqgX57A76aitZLLgY9KAacXhvVvTO0zF4Ra1q%2Fkv88YOX%2BEvcejFnylIzqlotsxCmnjyNeTEw%2FX5p%2FfobCYQYY%2Bjd45nDtpXc6sdLy%2B91aEz7vOqlRibE2VTK1TUjsK5Wbn6M92f%2F3uSfqi5EGSrG%2BAYTAYczA0CaUkm%2B7HCdIEr&X-Amz-Signature=3eddcbce98e09c48f4a0cc4a69b4bd181a5c32341015e1baf0a6b4c963964957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

