---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BACFDDO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwvD4fcBeAQShQ4aZvnJn5y3FwNmNnUuWx01jnJr9IqAIgFxeXIDpx9tup2FcoY8XdZgXnMejzmQiB9UBfJf0HnFoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC4rZ9S6LLlgJMHoZCrcA2xEiA4F4x4vDy53jaJq8H241XY6xFpjLi3NfwwtQUe5heQy4sWWeHFkcbNOrdKyOedSZID80k2bfL%2FeWFTz2bdDht%2BGdgSJpWAlkMajQGqRd1qlR5feDl4aQGnylAbYb7d4kEZGuGtWJMZBRlpaWtnnsOxFfGzBy0%2B1g3II3z8tx7PUtsg4tvOLXKG30zvksHCgGoRoech01QNp6vAsPjhl4pbe73Ki7iY6YMbSbpAbQiFHPAVE0t9sUWYAAuiuhYSz78VFt4DAkqNMWl5FvixxQTFIh6JyidtZT3XH5et2fjrlOLfKTdXTZH3RsmFCKn9ZJvWTrojNbQwqAMoXEdwWzTYFGkIHEYGS%2FrgYpFYSz39c6FfbSE01olnM4sdmipQowbDOki79qlhtIf6fmzT8xIuHm2s3XkF6z4SpOeiEE2UgiQ27O1hkTlI76F2psVuHAsJdlZsGVKPh1nBXuVChvsuYjgkVpNEW6C72YO5NlhmoVNmeEh71gnBLc8sZl4vzUas3Omgyw%2B6nU9Vh%2FZJxynGnlGcCEZq%2FGzNTDhHntdlTLHF%2B7EoDV9OsHiLhKICZ5QMzj5JC0Fs%2BXexKmemXToHf8V0b8QZRUZoLZFaZC8n2uG%2F%2B4wjOSth1MMHUyskGOqUB1HX65kTmEx91q59%2FabFnvozvqPFx6OofeVhy76NHzzi5w7wnqA6sZhA0Cj8rqeDQH5ic%2BhkgUlT7JM%2BDIYyIRrYOD7XKzKtDwcW3PumxCa7zM1lRHx8WHCq9MEywdOIciQ2tSOLNjRsXsCl1np%2F0fPcxvgSBMJIwoit0CD5%2BB%2BkTA%2F2H47wb7HoWicKuByhIZs%2F%2BgiwbeH7nmxGLRSvrwoA62kMc&X-Amz-Signature=028139231512581d6db5cd6a1d38455497ef6eafd1112365748360cc316bd678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BACFDDO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwvD4fcBeAQShQ4aZvnJn5y3FwNmNnUuWx01jnJr9IqAIgFxeXIDpx9tup2FcoY8XdZgXnMejzmQiB9UBfJf0HnFoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC4rZ9S6LLlgJMHoZCrcA2xEiA4F4x4vDy53jaJq8H241XY6xFpjLi3NfwwtQUe5heQy4sWWeHFkcbNOrdKyOedSZID80k2bfL%2FeWFTz2bdDht%2BGdgSJpWAlkMajQGqRd1qlR5feDl4aQGnylAbYb7d4kEZGuGtWJMZBRlpaWtnnsOxFfGzBy0%2B1g3II3z8tx7PUtsg4tvOLXKG30zvksHCgGoRoech01QNp6vAsPjhl4pbe73Ki7iY6YMbSbpAbQiFHPAVE0t9sUWYAAuiuhYSz78VFt4DAkqNMWl5FvixxQTFIh6JyidtZT3XH5et2fjrlOLfKTdXTZH3RsmFCKn9ZJvWTrojNbQwqAMoXEdwWzTYFGkIHEYGS%2FrgYpFYSz39c6FfbSE01olnM4sdmipQowbDOki79qlhtIf6fmzT8xIuHm2s3XkF6z4SpOeiEE2UgiQ27O1hkTlI76F2psVuHAsJdlZsGVKPh1nBXuVChvsuYjgkVpNEW6C72YO5NlhmoVNmeEh71gnBLc8sZl4vzUas3Omgyw%2B6nU9Vh%2FZJxynGnlGcCEZq%2FGzNTDhHntdlTLHF%2B7EoDV9OsHiLhKICZ5QMzj5JC0Fs%2BXexKmemXToHf8V0b8QZRUZoLZFaZC8n2uG%2F%2B4wjOSth1MMHUyskGOqUB1HX65kTmEx91q59%2FabFnvozvqPFx6OofeVhy76NHzzi5w7wnqA6sZhA0Cj8rqeDQH5ic%2BhkgUlT7JM%2BDIYyIRrYOD7XKzKtDwcW3PumxCa7zM1lRHx8WHCq9MEywdOIciQ2tSOLNjRsXsCl1np%2F0fPcxvgSBMJIwoit0CD5%2BB%2BkTA%2F2H47wb7HoWicKuByhIZs%2F%2BgiwbeH7nmxGLRSvrwoA62kMc&X-Amz-Signature=c79545dbdf116b124e7fc2411f8e45200a8c5507f390511678e5dc89d01a32db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

