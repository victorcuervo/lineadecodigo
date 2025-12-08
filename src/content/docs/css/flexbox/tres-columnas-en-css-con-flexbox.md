---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHMTSQM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK4kjlaN3wC2wMgP37tw6j%2BSRpwrWp4Hxd9Zm81k%2BAOAiEA06dm9y20TFDP46T%2Fk%2F2LxX5hpXHBO0YZbjrV35ve3hoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2lj1AU9cEGUDodFyrcA3INLQA64%2Bu2j5RZrXCTTD1mh1RHGXaDkRpag4cSizqIbiBopmS9N0uj%2BcEESfWlG%2BJivsduUB%2Fq%2BO01zAN%2BpjfuGW8CnqyQcGkFXHdKB2xPmvMIqyp0HnQX%2BBYsUAm8j%2FHgqjCrPsfUTs8WUMyWcwfnjuRslEYxi7ImnlRYWNKb46%2BJQUjNsaq82rjlkhiFHLi6VFX73%2FO5wmKdRj9fj2AxKe0AkIS26F66KvG25zr1BgzP1xvOnQiDMeqQo1XBrFb8FeASlQ72sNv%2FtB0OfraX2eZJsAb690tYz1FJ4mwz5AsyJmRjKBaHOBvOgyelwjspgEKvlNl55%2BTB552ngRk9%2B7Bh1DUsiIWReXbDj%2FEP9eJeAaWdv%2F44l1gAoDjpDV0dd7h%2B6zcqd%2B2gJXZ5BxZu5u%2BTrUvicgKhqjVZDlTQlH9%2BqIZvsM%2F31jPwrj3uVGOaF0PJhIdNQ8saZvXIkhMb9GYl1t551Jo85DNifxpTef7S6fzwENEJNXtahJOytWj9PoqzWLiWb0Oq5W4ci%2FyBV1TjjteKJs6OrkGCDiV7rNsIpaox56MoaMI6XCA9o6yu5VctNwf5zp6oJYBsk46g53AaWqexTxvr%2FzTlWHkUxRqsaZ0CWyryPC58MKDd3MkGOqUBJQaUYSmFD2FkP1AWEeVC7NMa%2BTAYEUlTZCs04MUP5t7QCuSjEUrgRLINktA520L7mqAJ1BpHWTjmWygwqSrF9fJMrQYIugl6LM53NfJ0Ba9wuBb9QUciWusENw0X%2BF5Xcrss7oU5lbnXvdMvh1g5Ejarw%2B8iynpn4B8YsqC2JpRMCNEYshUBmGhIO1g%2BD79b6PB6Ccn8VtEFz%2FTQvk5xW4KbHTt7&X-Amz-Signature=9712093cf847b070b9df641df5e10254710dba231f2eea1757099166ced288e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHMTSQM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK4kjlaN3wC2wMgP37tw6j%2BSRpwrWp4Hxd9Zm81k%2BAOAiEA06dm9y20TFDP46T%2Fk%2F2LxX5hpXHBO0YZbjrV35ve3hoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2lj1AU9cEGUDodFyrcA3INLQA64%2Bu2j5RZrXCTTD1mh1RHGXaDkRpag4cSizqIbiBopmS9N0uj%2BcEESfWlG%2BJivsduUB%2Fq%2BO01zAN%2BpjfuGW8CnqyQcGkFXHdKB2xPmvMIqyp0HnQX%2BBYsUAm8j%2FHgqjCrPsfUTs8WUMyWcwfnjuRslEYxi7ImnlRYWNKb46%2BJQUjNsaq82rjlkhiFHLi6VFX73%2FO5wmKdRj9fj2AxKe0AkIS26F66KvG25zr1BgzP1xvOnQiDMeqQo1XBrFb8FeASlQ72sNv%2FtB0OfraX2eZJsAb690tYz1FJ4mwz5AsyJmRjKBaHOBvOgyelwjspgEKvlNl55%2BTB552ngRk9%2B7Bh1DUsiIWReXbDj%2FEP9eJeAaWdv%2F44l1gAoDjpDV0dd7h%2B6zcqd%2B2gJXZ5BxZu5u%2BTrUvicgKhqjVZDlTQlH9%2BqIZvsM%2F31jPwrj3uVGOaF0PJhIdNQ8saZvXIkhMb9GYl1t551Jo85DNifxpTef7S6fzwENEJNXtahJOytWj9PoqzWLiWb0Oq5W4ci%2FyBV1TjjteKJs6OrkGCDiV7rNsIpaox56MoaMI6XCA9o6yu5VctNwf5zp6oJYBsk46g53AaWqexTxvr%2FzTlWHkUxRqsaZ0CWyryPC58MKDd3MkGOqUBJQaUYSmFD2FkP1AWEeVC7NMa%2BTAYEUlTZCs04MUP5t7QCuSjEUrgRLINktA520L7mqAJ1BpHWTjmWygwqSrF9fJMrQYIugl6LM53NfJ0Ba9wuBb9QUciWusENw0X%2BF5Xcrss7oU5lbnXvdMvh1g5Ejarw%2B8iynpn4B8YsqC2JpRMCNEYshUBmGhIO1g%2BD79b6PB6Ccn8VtEFz%2FTQvk5xW4KbHTt7&X-Amz-Signature=a176222f2c9abb01cfce01ff25823118c24f7c582e50a08018b03f5d18cf4bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

