---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNQ7A2J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFACtNOO8kS4z1q%2FgDMEO19W0t58ON3DWkgTbVMYR4VnAiEA%2F0SU0F3BhHQEvzGDQbfwC9%2FxWl9ygUK255L8CdPM8TcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRjWQoiZNBj1WITFCrcA8MKwy9j5yq9JcFL6r%2B844T2MB61Dzlc%2F%2FLTh1pQQsRT4ZJxOuo0tOlLc7DLZK%2FEHKwuKxVYdRwGvI1rVqqFgETdC8XVncmHmRVnldV5u8ti1Cat7Jl3y61ISAWEW8SRIisB%2F8%2FHM3GOcQwN2EchpGE5PdALyptY1XwiAm6RqI%2Fp1atrglK88358qo%2B2ZodhCT%2FlLCPWJgAm%2BzLeQq5%2B1SVZzmIecrJTz7PS%2BG7OlF6dJIGYO8xewcI1%2FNhBYyTc2woN0WcxohLZtWgEE13z61W1v2pVPUpBdShMFYmFIjCGzUlZGBl6%2BY1AXTipjFrJhrSMLy8m1etjMN720BQAamIHTqEWwrQuv0Jldr0IDn%2B4vd6lrvCXhJ1zNRtWdmBI36gXJrvvHPG0kOMIBO93WDPeqSnn2Cw88NjAC1xVcYpI5uPttLq9diZmHk3%2Fyne7%2FSFtcbzZLUZ7f39KM0gdw4csw79QbRLMSW1CpvR7FAitjmbsmm%2BK1qv83CejZkfhBgSGRAqRXwrCIX0o5iFesssy1PVMC1mB%2FjJPoj9ZxV3r9SZLYjWR0JjXSpudZfLEDub05U7LjIGB22EjEMHPk5CxBr8vPok5NuUoowx78SspWLgl0ESqacafOMn5MLeO3skGOqUBYaC%2FHzKJA9m28jxBr7YmhXI%2Bk2yuiukDkor2riQ07lcBwxCUwvebTXFpTJ3pzz1kTkERUyvGMUwlynwvcJT3IevgRvJjMzHCFQKTOXdE22J1bkJEEgnWbzfzDptxoELf1ZpQUIQcF0lqM%2FzmD7UIJa9BIvgEaLyT%2Bn8qayPD8UksDuWcUY923CDLZp3JZak1LJ15rLITXRP%2BdRBAdU2sqMNwSb0Y&X-Amz-Signature=02df96e201d080d41ed3b4ca7b597cc63cc0880d45d94d21b6ac8b5f7133e374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNQ7A2J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFACtNOO8kS4z1q%2FgDMEO19W0t58ON3DWkgTbVMYR4VnAiEA%2F0SU0F3BhHQEvzGDQbfwC9%2FxWl9ygUK255L8CdPM8TcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRjWQoiZNBj1WITFCrcA8MKwy9j5yq9JcFL6r%2B844T2MB61Dzlc%2F%2FLTh1pQQsRT4ZJxOuo0tOlLc7DLZK%2FEHKwuKxVYdRwGvI1rVqqFgETdC8XVncmHmRVnldV5u8ti1Cat7Jl3y61ISAWEW8SRIisB%2F8%2FHM3GOcQwN2EchpGE5PdALyptY1XwiAm6RqI%2Fp1atrglK88358qo%2B2ZodhCT%2FlLCPWJgAm%2BzLeQq5%2B1SVZzmIecrJTz7PS%2BG7OlF6dJIGYO8xewcI1%2FNhBYyTc2woN0WcxohLZtWgEE13z61W1v2pVPUpBdShMFYmFIjCGzUlZGBl6%2BY1AXTipjFrJhrSMLy8m1etjMN720BQAamIHTqEWwrQuv0Jldr0IDn%2B4vd6lrvCXhJ1zNRtWdmBI36gXJrvvHPG0kOMIBO93WDPeqSnn2Cw88NjAC1xVcYpI5uPttLq9diZmHk3%2Fyne7%2FSFtcbzZLUZ7f39KM0gdw4csw79QbRLMSW1CpvR7FAitjmbsmm%2BK1qv83CejZkfhBgSGRAqRXwrCIX0o5iFesssy1PVMC1mB%2FjJPoj9ZxV3r9SZLYjWR0JjXSpudZfLEDub05U7LjIGB22EjEMHPk5CxBr8vPok5NuUoowx78SspWLgl0ESqacafOMn5MLeO3skGOqUBYaC%2FHzKJA9m28jxBr7YmhXI%2Bk2yuiukDkor2riQ07lcBwxCUwvebTXFpTJ3pzz1kTkERUyvGMUwlynwvcJT3IevgRvJjMzHCFQKTOXdE22J1bkJEEgnWbzfzDptxoELf1ZpQUIQcF0lqM%2FzmD7UIJa9BIvgEaLyT%2Bn8qayPD8UksDuWcUY923CDLZp3JZak1LJ15rLITXRP%2BdRBAdU2sqMNwSb0Y&X-Amz-Signature=63b72aaed17497e88eebae92d7e46e0223b67529561e400abec057ddc2b4b716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

