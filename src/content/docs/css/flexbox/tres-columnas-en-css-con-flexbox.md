---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDF6QGA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdokiqCZM3mHQgNl6h7%2B3eDpJrF2kKH9O3qmneTl%2FrbAiEArJx2QROcpUmApz0Nwxbc5Cv1CdK7%2BO%2BcQEOiWEhxo0MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaqH1N8C6mkbR8BTircA9w7c9lVt3rx1VtgGj2BeI3kkcZuDdWA2z6jySztHk5hlm8SmXn3QVsX5XvhW6N2XW3piRHe9cFZ0lsATzrFpv9jJFxn8%2FOXmakJs5wbFDumYpbTk8jIPho2HAi%2FkNxXHgOWkTwsAJgEtvR3443HCKi3dgI75k1Iu6QHSKbLKcHZZTqBancPJFgJbRMB5HAJRTvuLIu%2B5l67VsBKLRX5hLveOjCTgC6S6Jt6%2BL1CdTpKt%2B7RLOcTDjipPKbx5Wnx3j0EtnUAz4XuWaMmQkktzkKbuqII%2FegE20Vu9NEJFHvProqiOxIkKrG25oaWrbYv0jfJYbq6ojcG5JrdCGhxyPfpAuy9P5KXQDPIYaRRauBFM4avX%2FTHrXm%2FM0IvZFRNzh0GSHoac%2FEa%2BNKFCH6Mnk%2FkxTPkNzn77%2FQMoJ4Xa4IfRGkA97CC8cKBK0YaeSs6RXyxe%2FA8rvEaKo9DJnfoqEaG0b3LZKQR8MOOPce1%2BjEIWYgZ%2FtKSmS41MxJcIwC7gbdMtOlvb0VQd54yx7fb1US1Q2JdwMjxpycghmNHPjz60wYUP4t1tBLFTek4IzSONzhzbBlAqBOP3m%2B1cQwcVZnnnG2SzB6HYvu3EymX4NYdGO8x9VuVjtvyjyN%2FMOCa1ckGOqUB0XPgBGukc7JA2sm4rFa7%2FcqopqEAbpJxfyN919mL9%2BrE1WFmeNaS4JhZn4GLgQDkFgfHAWy2RCkC%2Fer8gs1Db%2BtgDhS6a8a1UKyFJdQEni3KNJic61zLg3O%2BZujnz6VhQxkg0c6hjem%2BeM%2ByS3aHNtit2OCtUGHVcllY%2BeZY%2Fv0Ei1whLPLuhpOGCv%2ByxcI0asu7jxOj3kH79ZJa3tMjyxOUkuFl&X-Amz-Signature=01b4efb189cc68a1f8b5b0281a4881135b3f4c7e4489827bc930994a3ba4ce5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDF6QGA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdokiqCZM3mHQgNl6h7%2B3eDpJrF2kKH9O3qmneTl%2FrbAiEArJx2QROcpUmApz0Nwxbc5Cv1CdK7%2BO%2BcQEOiWEhxo0MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaqH1N8C6mkbR8BTircA9w7c9lVt3rx1VtgGj2BeI3kkcZuDdWA2z6jySztHk5hlm8SmXn3QVsX5XvhW6N2XW3piRHe9cFZ0lsATzrFpv9jJFxn8%2FOXmakJs5wbFDumYpbTk8jIPho2HAi%2FkNxXHgOWkTwsAJgEtvR3443HCKi3dgI75k1Iu6QHSKbLKcHZZTqBancPJFgJbRMB5HAJRTvuLIu%2B5l67VsBKLRX5hLveOjCTgC6S6Jt6%2BL1CdTpKt%2B7RLOcTDjipPKbx5Wnx3j0EtnUAz4XuWaMmQkktzkKbuqII%2FegE20Vu9NEJFHvProqiOxIkKrG25oaWrbYv0jfJYbq6ojcG5JrdCGhxyPfpAuy9P5KXQDPIYaRRauBFM4avX%2FTHrXm%2FM0IvZFRNzh0GSHoac%2FEa%2BNKFCH6Mnk%2FkxTPkNzn77%2FQMoJ4Xa4IfRGkA97CC8cKBK0YaeSs6RXyxe%2FA8rvEaKo9DJnfoqEaG0b3LZKQR8MOOPce1%2BjEIWYgZ%2FtKSmS41MxJcIwC7gbdMtOlvb0VQd54yx7fb1US1Q2JdwMjxpycghmNHPjz60wYUP4t1tBLFTek4IzSONzhzbBlAqBOP3m%2B1cQwcVZnnnG2SzB6HYvu3EymX4NYdGO8x9VuVjtvyjyN%2FMOCa1ckGOqUB0XPgBGukc7JA2sm4rFa7%2FcqopqEAbpJxfyN919mL9%2BrE1WFmeNaS4JhZn4GLgQDkFgfHAWy2RCkC%2Fer8gs1Db%2BtgDhS6a8a1UKyFJdQEni3KNJic61zLg3O%2BZujnz6VhQxkg0c6hjem%2BeM%2ByS3aHNtit2OCtUGHVcllY%2BeZY%2Fv0Ei1whLPLuhpOGCv%2ByxcI0asu7jxOj3kH79ZJa3tMjyxOUkuFl&X-Amz-Signature=9fa5c43ca0f8dfc199672e2bdbb38243220ef742104fea680e65863eaa47bf36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

