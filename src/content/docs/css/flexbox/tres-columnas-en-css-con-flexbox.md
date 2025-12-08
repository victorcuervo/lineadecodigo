---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6WUUFX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZazHlszocbrEradOvW4FP0sBTfdc1nTW9ksBIwo4BJgIhAMaXxXhkuG%2FqS6ZoSd798u4aga1hTYnozFfzPT9mXcfpKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3xw7F9yA4PKH1F6kq3AP0%2FcS0MN%2FJ%2Fd7n%2FcuNA3nyC3au3RB6Vk%2F6h9vvvoc5n4jgkTB04k7GJbInj%2FhnHzuXnc6ybtHekkkEfhsoiPEQXlkhfObGsSbZGp8khYTbEpZQMlVU85ln6%2BKmMGX19zUXkOV6nOn%2F3HKYXHxp8Xk%2BEnXfoRcI3ssZ%2BwxsEH%2BMJF%2FHxt23l4K09NKdHWlqH%2FGGEEOx6G8%2FRl0HqVPhH8uL1JNtoY7k2nTj4w7J1AnJuSr4mGvu2V0YgpWKfNjKO7bDAWSq0%2Fid3QIepgWglxD7IgCH21K283T7GIC87rePCfP3njey1r3UxgZttQpPARfWOTib7nUejuYptP9ujzo%2BqU%2FmPm54ceDTF53h15S88363Eht341ZZY2CrlPoCk0AdIItOseGRa8EhcdnJK2r1X%2Bzf%2BijyvfjuPm3DDYnwBJlG2MneP9MvzxEKtbM8lfZacV02xl8i2O2hRtVfA2T8ceUAdNXCNxZtWecfCXI07u1qy8za1RMgIMcJFy%2B%2FmaTqoPRuP3NXot3CU4OYvq7G82%2FKQmiSbs2gE6y3Ytq1SRygXd%2BISia4OkKijYiJf9QDWLUT3C5RTlIvwl3l2rXmgR4U6V3UPWOUaBClPjXfiPv%2FfmuHwvx%2FIk8XgDDvlNnJBjqkATKdnYLhyYZp6jSGs6M8cz9FyHu5c9Ny6zFPrubADo%2FNNcVDh%2Ft1r4ly%2Ft%2FXoQ1lr2segzH7CqHHjpPqRz%2B1oWmnh4W3cLp3UUDpT7N2%2FkFdhZTILg9pC9A2rGR9J6nI6LZ2bVwmdKcLmnWWqKTcaS%2F%2BOxPgtkdBeOgbpFfekSVvG7E1NC2MzCoxUiirsttuLh5yDVSvu3X7u9JWhaag0wjdL7aU&X-Amz-Signature=7b72529b2550b88b9e3f303c03a1939d1abbf90c1a1b5108f6f3dca145e86c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6WUUFX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZazHlszocbrEradOvW4FP0sBTfdc1nTW9ksBIwo4BJgIhAMaXxXhkuG%2FqS6ZoSd798u4aga1hTYnozFfzPT9mXcfpKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3xw7F9yA4PKH1F6kq3AP0%2FcS0MN%2FJ%2Fd7n%2FcuNA3nyC3au3RB6Vk%2F6h9vvvoc5n4jgkTB04k7GJbInj%2FhnHzuXnc6ybtHekkkEfhsoiPEQXlkhfObGsSbZGp8khYTbEpZQMlVU85ln6%2BKmMGX19zUXkOV6nOn%2F3HKYXHxp8Xk%2BEnXfoRcI3ssZ%2BwxsEH%2BMJF%2FHxt23l4K09NKdHWlqH%2FGGEEOx6G8%2FRl0HqVPhH8uL1JNtoY7k2nTj4w7J1AnJuSr4mGvu2V0YgpWKfNjKO7bDAWSq0%2Fid3QIepgWglxD7IgCH21K283T7GIC87rePCfP3njey1r3UxgZttQpPARfWOTib7nUejuYptP9ujzo%2BqU%2FmPm54ceDTF53h15S88363Eht341ZZY2CrlPoCk0AdIItOseGRa8EhcdnJK2r1X%2Bzf%2BijyvfjuPm3DDYnwBJlG2MneP9MvzxEKtbM8lfZacV02xl8i2O2hRtVfA2T8ceUAdNXCNxZtWecfCXI07u1qy8za1RMgIMcJFy%2B%2FmaTqoPRuP3NXot3CU4OYvq7G82%2FKQmiSbs2gE6y3Ytq1SRygXd%2BISia4OkKijYiJf9QDWLUT3C5RTlIvwl3l2rXmgR4U6V3UPWOUaBClPjXfiPv%2FfmuHwvx%2FIk8XgDDvlNnJBjqkATKdnYLhyYZp6jSGs6M8cz9FyHu5c9Ny6zFPrubADo%2FNNcVDh%2Ft1r4ly%2Ft%2FXoQ1lr2segzH7CqHHjpPqRz%2B1oWmnh4W3cLp3UUDpT7N2%2FkFdhZTILg9pC9A2rGR9J6nI6LZ2bVwmdKcLmnWWqKTcaS%2F%2BOxPgtkdBeOgbpFfekSVvG7E1NC2MzCoxUiirsttuLh5yDVSvu3X7u9JWhaag0wjdL7aU&X-Amz-Signature=f64cafb49fb8dc5bc299f1f609c2659ddc52f4d495b387f020fec50a4665a8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

