---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KRM4M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCUaDbjP%2B0eD1FNGJc3QdC6hm6QnHDn5japegos32sgIhALpdSyIH6%2BqsOBzYHo74d9dBnBX%2BkwDXfnv53dRR%2FzTPKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrrybIcjt2HPlkMocq3AOm8pmDWIUEo5he4nR7iLOwLVpWrAH3FVzVRbNlcZ9w4vagMQLpkROw2NakrVqrYahw2wcJIeH7DXJDmcAJ0p%2Bur7d6%2F5hNP6owrKwF08K5cjQbQbDQbNrW%2Flavo6LAuue16dezfmOFzPY6TLk8BAsZMl2X9Y1z9%2FcdijNRsAFU%2Fug7vNRcp1yPQJbIks9%2FGeDEqcolRxkaaztM4r5RCD6Q3tgBEn4RK19KbVwnPQgIDLOEQrCqDIuvRjFFJ4JPA3N8IrPRbRD2pn45fTq091ZRWxaLe98u%2F9Xd15PEclxleF9RYxCo%2BT1kzYlLVvCjAfAjQh5%2F9Twzm4KCpsod1oTfuZHPa%2BZER7gy%2BG45fcanLzTzdXa7lRSFC2K7n8gBOsdppm5s1sBOCD6ZJvhU4hwmffneuVH5R8SYQiytBgyt4XJCakDXHNfii341HBUC%2FXbJf6Z1m5Qtxb1XVi9TgBSbkugCpDmBosOVxpBXP7pWxBd%2B2QMkRPx9V0RvAvvTwsQJSE7L%2BuDz4T4hPk5yPY5lqqOLz2JRHn%2F42YD409B1jgO6X1lZq%2BfHb2UCCHnqqkVZ6lu4UlhptobkfZJcgoRzH7QAYwk5XXfWAePwcIK42WmG%2BjlI6Q4Xjl4gOTCJj97JBjqkATTs2EKEDhUk5htYsQkRwch5FN6oU0w0v9xuQJfhw6XXw11M8aUnFIDmCYi5tDktUvD8xSYbinvKmXC9ABAqhOuX8HlSbD%2BnNcska7D%2BKGd8hkaDws97x6qzS5bp5UvGhwNZfT60u%2Fv5ynXX6SA%2BMJFEh4ZF83kzVTkfLWR1zJoo4%2BFk1XIm5zXLd%2BSygqfkO7uHuqxZyQa5WEKH7PF1IRu3G8fM&X-Amz-Signature=f49557c95483fe4ca75e677c9cb7dc4551dcd34123d6b38f1df9e06f8703f3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62KRM4M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCUaDbjP%2B0eD1FNGJc3QdC6hm6QnHDn5japegos32sgIhALpdSyIH6%2BqsOBzYHo74d9dBnBX%2BkwDXfnv53dRR%2FzTPKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrrybIcjt2HPlkMocq3AOm8pmDWIUEo5he4nR7iLOwLVpWrAH3FVzVRbNlcZ9w4vagMQLpkROw2NakrVqrYahw2wcJIeH7DXJDmcAJ0p%2Bur7d6%2F5hNP6owrKwF08K5cjQbQbDQbNrW%2Flavo6LAuue16dezfmOFzPY6TLk8BAsZMl2X9Y1z9%2FcdijNRsAFU%2Fug7vNRcp1yPQJbIks9%2FGeDEqcolRxkaaztM4r5RCD6Q3tgBEn4RK19KbVwnPQgIDLOEQrCqDIuvRjFFJ4JPA3N8IrPRbRD2pn45fTq091ZRWxaLe98u%2F9Xd15PEclxleF9RYxCo%2BT1kzYlLVvCjAfAjQh5%2F9Twzm4KCpsod1oTfuZHPa%2BZER7gy%2BG45fcanLzTzdXa7lRSFC2K7n8gBOsdppm5s1sBOCD6ZJvhU4hwmffneuVH5R8SYQiytBgyt4XJCakDXHNfii341HBUC%2FXbJf6Z1m5Qtxb1XVi9TgBSbkugCpDmBosOVxpBXP7pWxBd%2B2QMkRPx9V0RvAvvTwsQJSE7L%2BuDz4T4hPk5yPY5lqqOLz2JRHn%2F42YD409B1jgO6X1lZq%2BfHb2UCCHnqqkVZ6lu4UlhptobkfZJcgoRzH7QAYwk5XXfWAePwcIK42WmG%2BjlI6Q4Xjl4gOTCJj97JBjqkATTs2EKEDhUk5htYsQkRwch5FN6oU0w0v9xuQJfhw6XXw11M8aUnFIDmCYi5tDktUvD8xSYbinvKmXC9ABAqhOuX8HlSbD%2BnNcska7D%2BKGd8hkaDws97x6qzS5bp5UvGhwNZfT60u%2Fv5ynXX6SA%2BMJFEh4ZF83kzVTkfLWR1zJoo4%2BFk1XIm5zXLd%2BSygqfkO7uHuqxZyQa5WEKH7PF1IRu3G8fM&X-Amz-Signature=7c0daee99f54189491694f26a0d2f0e8767796299c59b90fc1a96192fe9be450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

