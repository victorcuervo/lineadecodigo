---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274UOXTF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdHIMA9MMFwRQphdIw0RTI30iqhfL5iDr%2F1wWFTZCHAAiAn1f70FuIsriTzkzvsI7QeTpUw63459GuQPic%2FLlLvCSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMziK%2Fqbd8erFpa9idKtwDWIh0JpOB6fknoi2PCtRA9YLy7eMjEAy1tmiKGivABwlcWs5S9uUVwBQSh7QBJHOMJ6GE1Aw7DGNmFIEmQVSDtr8NwBXxmIKUx1Ie1Yr6oWCSaNDNpElgJXGhECNpnCrUUHLEWSXFcwuXKp0OoUL%2FhQVi7WcmE8yzU%2Fl%2BtYeycePfghhIg1ltp4y4ZUiR0if3fqAXsDYCh16nEThqktUWcJ058jjBJ6QmRvv2d6%2Fwj%2F76KXz1uS8msRpKQ5zLB5diJDDoRjEyymmNpk%2FNQy8ylYHz6A%2F%2BRZKkjTbL2CMzPohhbqmS1PyvgpOYgP85sxGT17Zo1h6JuJ9ISYwaKpKcRnKttm7zhboczs13BY86T6G62zAtKvYlHnJ9oh45Z13o2R38us2%2FE8not2T3DzH0C6WneA9k7CM2UJjQHx0ENabqhbFB0pef%2BDwldZRwu8JvuXQ45u7W4CGZFxpGjAPB6723fpSiphMQH%2FQE%2F%2F5lzE%2FdyVwgc1UmVHYsjhP%2Fuc0w1f6XqtgUYSt%2FgGB5KnWDzImvAJeXuZZ3yiCNY89TFjDlw0QBLR%2FgL1WwzRZbortuW5i9iegnhxnJLrWmSD1zK%2FE1R2IIt2AsM7H6liuJP4bT7i7ptp%2BZyhUP0jowzO3LyQY6pgHGpsmHp7524gBYDgHHfh%2Bo9JGT1hJz7203cf6sfb3xPl%2BCGt1KPBavCGhbtHNUXYkscvGMCUakXbO7Mbt7BJYpaooaqgIkvsW7wfGMpjPuR9HyAR%2BJxrVSgp6uuZv9vpwqOjMXynFeH6fpN6TYI6Jjc2Rg8cTMkJkfaHdM7a4ZPQos2UE1C4ObIrBqMfFfXxYcfou3lY3%2Fk65akXGc1NJozSm7P%2F1a&X-Amz-Signature=0f5b501e18ccc2cd51511146a759315948cdd26172c2636066d0cc4c2375d205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274UOXTF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdHIMA9MMFwRQphdIw0RTI30iqhfL5iDr%2F1wWFTZCHAAiAn1f70FuIsriTzkzvsI7QeTpUw63459GuQPic%2FLlLvCSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMziK%2Fqbd8erFpa9idKtwDWIh0JpOB6fknoi2PCtRA9YLy7eMjEAy1tmiKGivABwlcWs5S9uUVwBQSh7QBJHOMJ6GE1Aw7DGNmFIEmQVSDtr8NwBXxmIKUx1Ie1Yr6oWCSaNDNpElgJXGhECNpnCrUUHLEWSXFcwuXKp0OoUL%2FhQVi7WcmE8yzU%2Fl%2BtYeycePfghhIg1ltp4y4ZUiR0if3fqAXsDYCh16nEThqktUWcJ058jjBJ6QmRvv2d6%2Fwj%2F76KXz1uS8msRpKQ5zLB5diJDDoRjEyymmNpk%2FNQy8ylYHz6A%2F%2BRZKkjTbL2CMzPohhbqmS1PyvgpOYgP85sxGT17Zo1h6JuJ9ISYwaKpKcRnKttm7zhboczs13BY86T6G62zAtKvYlHnJ9oh45Z13o2R38us2%2FE8not2T3DzH0C6WneA9k7CM2UJjQHx0ENabqhbFB0pef%2BDwldZRwu8JvuXQ45u7W4CGZFxpGjAPB6723fpSiphMQH%2FQE%2F%2F5lzE%2FdyVwgc1UmVHYsjhP%2Fuc0w1f6XqtgUYSt%2FgGB5KnWDzImvAJeXuZZ3yiCNY89TFjDlw0QBLR%2FgL1WwzRZbortuW5i9iegnhxnJLrWmSD1zK%2FE1R2IIt2AsM7H6liuJP4bT7i7ptp%2BZyhUP0jowzO3LyQY6pgHGpsmHp7524gBYDgHHfh%2Bo9JGT1hJz7203cf6sfb3xPl%2BCGt1KPBavCGhbtHNUXYkscvGMCUakXbO7Mbt7BJYpaooaqgIkvsW7wfGMpjPuR9HyAR%2BJxrVSgp6uuZv9vpwqOjMXynFeH6fpN6TYI6Jjc2Rg8cTMkJkfaHdM7a4ZPQos2UE1C4ObIrBqMfFfXxYcfou3lY3%2Fk65akXGc1NJozSm7P%2F1a&X-Amz-Signature=e106f9fe81d39538171e6780be2cc12f7995d08f537394de7b9a575322436826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

