---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUC2MTBR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCusCV4LKieN4Dk1abOCjiXwtBwV6g%2F7q4G8lzwUwOcEwIhAKWyQoFggT6pW2Qpe%2FHgNH3oW5YULnDzKR6R896gn0NKKv8DCE8QABoMNjM3NDIzMTgzODA1Igyqi8f8mkMP0Zd8R3Yq3ANkK%2Fzg2ePSTt%2B8uWL6KXzQVCZwRoOebYXQsrkhUkoOsNLcSYSvDnvKdtLPz8%2BLMweRMyE0rpzDIhm7YseLwf5Cs9nRGW8fuifynZVCSeafwkwj%2Fc6Dunj%2F6Tw93tUwsnmv233GeRUoppSxzrmSUl%2BnnSXu5aC%2FFIdIrcgzCP5oAtjWI67CsJflLgRP4LbvxF0evONOWs%2Bu0uDa2HOTDnkK%2BfL4FZ3Utz%2BLMB7F7gDAmXeFlgp8iERcTKDZYPu7L1NWsjnto6CdG7w5JcmDWm7mA2q%2BXvkXu%2FNpbtuIzSlRu4T1ZawTL03Wa6fGm4JmXpl2ecHnf%2Fg3fwTR8fHRYbsoBMu8znf1lpwVwXKK%2BBjaq%2FO%2Bi7Q6YmnTKPQkAx1%2BKhf7XzJ1W8OHBdQLg681sgfq4ufNMQf3NOD7Om6Mu3dKjGsYu0I2eha2FQ3V%2FjmLrZ2VRkocQr3TCc9UiilbNIGLNKcMxFb%2BtgHON2XQWabJ0i9AWt4SnkUsBMl07g5vzR6QlTd4ZeHnU3rvSeUVRc%2F2XpfConWDTDQ5%2B%2B2YqQIgBvfoc9sv1V9wVVLTw0%2B%2FURMIxulsR0fKauJy7ZQ3fxa2tY2nwEPh%2Fvwx1nBmRX28ulrOJal3GKpRaovhcTDfjMjJBjqkAfzB%2B2JVdasXJXlNObD4xR%2FjrU8dwU4rUr9uoedTBo1Zn%2B5%2BS6mnrKGWo5fDdD2N3VDrbqPpfZrSMvoBlrfL5BAjG6RitnVDeWDQ%2Fv0ZHQQRKfCeoVVvcW9w90ul3ayK%2BOKk2bYzJy8oZ3iWsTFiS%2FYT8aIO3RwAySFV80URwVEx%2FWchgFSm3LY6DhMYzHFBsQSufovXqQXEQcBBrPK%2BuQ7wzKw7&X-Amz-Signature=df4f82ed8449a7cffa02383981e3b1154356d7bd3b1f6271468a5133a8ca8a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUC2MTBR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCusCV4LKieN4Dk1abOCjiXwtBwV6g%2F7q4G8lzwUwOcEwIhAKWyQoFggT6pW2Qpe%2FHgNH3oW5YULnDzKR6R896gn0NKKv8DCE8QABoMNjM3NDIzMTgzODA1Igyqi8f8mkMP0Zd8R3Yq3ANkK%2Fzg2ePSTt%2B8uWL6KXzQVCZwRoOebYXQsrkhUkoOsNLcSYSvDnvKdtLPz8%2BLMweRMyE0rpzDIhm7YseLwf5Cs9nRGW8fuifynZVCSeafwkwj%2Fc6Dunj%2F6Tw93tUwsnmv233GeRUoppSxzrmSUl%2BnnSXu5aC%2FFIdIrcgzCP5oAtjWI67CsJflLgRP4LbvxF0evONOWs%2Bu0uDa2HOTDnkK%2BfL4FZ3Utz%2BLMB7F7gDAmXeFlgp8iERcTKDZYPu7L1NWsjnto6CdG7w5JcmDWm7mA2q%2BXvkXu%2FNpbtuIzSlRu4T1ZawTL03Wa6fGm4JmXpl2ecHnf%2Fg3fwTR8fHRYbsoBMu8znf1lpwVwXKK%2BBjaq%2FO%2Bi7Q6YmnTKPQkAx1%2BKhf7XzJ1W8OHBdQLg681sgfq4ufNMQf3NOD7Om6Mu3dKjGsYu0I2eha2FQ3V%2FjmLrZ2VRkocQr3TCc9UiilbNIGLNKcMxFb%2BtgHON2XQWabJ0i9AWt4SnkUsBMl07g5vzR6QlTd4ZeHnU3rvSeUVRc%2F2XpfConWDTDQ5%2B%2B2YqQIgBvfoc9sv1V9wVVLTw0%2B%2FURMIxulsR0fKauJy7ZQ3fxa2tY2nwEPh%2Fvwx1nBmRX28ulrOJal3GKpRaovhcTDfjMjJBjqkAfzB%2B2JVdasXJXlNObD4xR%2FjrU8dwU4rUr9uoedTBo1Zn%2B5%2BS6mnrKGWo5fDdD2N3VDrbqPpfZrSMvoBlrfL5BAjG6RitnVDeWDQ%2Fv0ZHQQRKfCeoVVvcW9w90ul3ayK%2BOKk2bYzJy8oZ3iWsTFiS%2FYT8aIO3RwAySFV80URwVEx%2FWchgFSm3LY6DhMYzHFBsQSufovXqQXEQcBBrPK%2BuQ7wzKw7&X-Amz-Signature=0c9b37a9d6931b9cc57427d997779a21a11ca07cd061b71ece0fba78f65a0a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

