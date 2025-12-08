---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4FAEYZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrusiBj40DhUeQirxNj%2FDCtpinr3HohQb8RcnVaR%2FQagIhAJZA4h58r%2Fc6sr5rj%2FseuAg0DUVfjGVEUpIUER7Ov%2FZiKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxffTwHIRltvaUFbYwq3AMeKjghhT0IH0JAghHdXA%2FNoMcjFdgHv9XvRbyjrZGpPAf4GtbIPztN9IeBGs5KeVaZuf2EaGZCSQmDdrzxEhFG6WaDq9f1JhUfyLABut8k5pMYC8yiqGRX7eXqPFKnNBzm2HYiiDzM%2BZsspQeYhHgrKKWJAF9NzU6bTs20TPg3fdqc82VKiyyEq3NRFGeoTaF6alxP8YEkl%2BM%2Fo8gqj4ri%2BvUg2O0Orml6%2FVBDXko2wjfcv%2F8rJw48evFGNnFwt5vksXqI36%2FmYB5ucSLC18J1fKbxYMj58L2Jx8eo6hARomm8n579dzgkhvKsCyxkiX3i7cLzd5IHWoW0rxIfH7PHjXmoiB3IN4VDucy96i5Ml3ja9MASE5B%2BsPP4lI2qdipIWLsbFKvjWKqHoVy09KNyOyhQSlfKLLiw1yf7cmjeYDiZbPSeLtohUl8ncOlZNcoD1mKNIunSy74WRWub1NM5mT5i0lKOVoeneameECYGjgADH8SqJUv5VMhaNNqYBoawllv5sFr9vJKZqU2EYtKmbSdau%2F4kjASd%2B3fx81DBlugdzIFobWb3pl8%2FbPdipMT4VQ0I%2FVeo3nXxGK2gV87Cdfcx%2ByijiBWFBm%2BeAEVsbvaewfB2hdyZbNa1UzCH79jJBjqkAX3gB3WJQLX9XVctI5TTlGltpBEpgRctqTSe1T8gT82YsN33ug4NrTt0hC4Lj2C4fC4tMGDsjkrZQKCNjeSBxvnwefa3SX3H%2BKyEX75IIsc0D2Gb%2FWiLqyUr%2FKyy19PFbxoxL%2B5DdI5rRvf2xyrUSLk45STo%2FKKdGj6VVWejfS6eBBwec5CInjhBjYYlbtxiqDTJ1NBgC%2Bdok04DVc%2B0QFbRdCli&X-Amz-Signature=3392a9fecb04958a03f12bb01b4c99029dc055c386762c3ef4417552a989620d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4FAEYZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrusiBj40DhUeQirxNj%2FDCtpinr3HohQb8RcnVaR%2FQagIhAJZA4h58r%2Fc6sr5rj%2FseuAg0DUVfjGVEUpIUER7Ov%2FZiKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxffTwHIRltvaUFbYwq3AMeKjghhT0IH0JAghHdXA%2FNoMcjFdgHv9XvRbyjrZGpPAf4GtbIPztN9IeBGs5KeVaZuf2EaGZCSQmDdrzxEhFG6WaDq9f1JhUfyLABut8k5pMYC8yiqGRX7eXqPFKnNBzm2HYiiDzM%2BZsspQeYhHgrKKWJAF9NzU6bTs20TPg3fdqc82VKiyyEq3NRFGeoTaF6alxP8YEkl%2BM%2Fo8gqj4ri%2BvUg2O0Orml6%2FVBDXko2wjfcv%2F8rJw48evFGNnFwt5vksXqI36%2FmYB5ucSLC18J1fKbxYMj58L2Jx8eo6hARomm8n579dzgkhvKsCyxkiX3i7cLzd5IHWoW0rxIfH7PHjXmoiB3IN4VDucy96i5Ml3ja9MASE5B%2BsPP4lI2qdipIWLsbFKvjWKqHoVy09KNyOyhQSlfKLLiw1yf7cmjeYDiZbPSeLtohUl8ncOlZNcoD1mKNIunSy74WRWub1NM5mT5i0lKOVoeneameECYGjgADH8SqJUv5VMhaNNqYBoawllv5sFr9vJKZqU2EYtKmbSdau%2F4kjASd%2B3fx81DBlugdzIFobWb3pl8%2FbPdipMT4VQ0I%2FVeo3nXxGK2gV87Cdfcx%2ByijiBWFBm%2BeAEVsbvaewfB2hdyZbNa1UzCH79jJBjqkAX3gB3WJQLX9XVctI5TTlGltpBEpgRctqTSe1T8gT82YsN33ug4NrTt0hC4Lj2C4fC4tMGDsjkrZQKCNjeSBxvnwefa3SX3H%2BKyEX75IIsc0D2Gb%2FWiLqyUr%2FKyy19PFbxoxL%2B5DdI5rRvf2xyrUSLk45STo%2FKKdGj6VVWejfS6eBBwec5CInjhBjYYlbtxiqDTJ1NBgC%2Bdok04DVc%2B0QFbRdCli&X-Amz-Signature=9347b14399710e09414fee14cef18c837fc08f863051db17838528f9c422ff3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

