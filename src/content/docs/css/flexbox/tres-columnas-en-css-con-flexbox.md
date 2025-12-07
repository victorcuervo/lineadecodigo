---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULRJKEU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgSnHlgY6iIEP8zm4J%2Fu7PpRH4OfK1L17ENyJCdsTzgIgOy2goBJ9MD3S9iq8glNuLYQggM%2F0ISeraeJreVrjhmEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJCxA%2FyOFMQFPCOhCrcA4KPxBUWezlBcBY0vyfiQT%2FB2xhanXVh%2FzmlRjlKLmxRI%2BSbkYSMjISljMoomoiuxKXbM6pdRrfTT7yv%2Bc9HcrSTKOCrTAjPrBN19MGqVK9%2F2hGJt%2B4jB0JUP4lfhFp%2BKG43qCUFjzh%2Fh4bgC6e2yeRV5Ilb%2F34kaoC9N9j%2B4Sc%2FNCvnsLk2ImgCqem2j8i%2BmX6IYcAy5yCRL0iijau2g2aqK6OUU7ahqiEzzywDSTnqWUKB5cS1%2Fm6zx6tk1YHl%2Be9a%2FeDAlalLG7tr%2BUXpRzvK1qpVa35X1JdTLPsLZD5vl4TReRWkoJ5IpNJ30tloKKZJiFmJoptKnD4j0Y%2FYkDCuw4vO6Pytno%2Bhey9pIEzNyrGZ332VphKPvZ9q%2FI3tOC5gpwQeP6MyNREcPTsZMJdqDlKL373%2Fm8Hme%2FYZb2zpXkLK57Sm5P7pyAuhiJZRGD72Ug%2FiKudIjCpiqABt0lCoNs0TFgK502fy9TwJSYgKHAW8a5lBG%2FUDf3hhDVOrLJV%2F6lin6YeJOKCV2oOnp9XJMYybUfPWdKMwsGw%2FNm8WADwPy83SluOpYOiVNzjSZSu2TR5%2BYkvUKg%2Fe2vn9fh97Ia0LfsKnkyC%2BhT2VXg5ZRz9syw9BH80xbQtjMP%2B41skGOqUBqG2mSrJUt2ECsXDYsDLpXqMIQbOC6jlOzM5FA6KyxlqPVf46KnxuKuc2ZkXFLlnXojkOctslVR2FCbvl3PPsHh8wxdQL4W8n4Ge%2F4Gw5bNswkerNS6qDCBfsBM2bhUQKn0c0REyLxEtL4fxGX4%2B3TpoFiDhM%2BAPSROYotOgkKV39WWj2It8P68JzElIDL6zC1uga51KsJylxWgz%2B45vck4h0scyk&X-Amz-Signature=98121b23e258b8d1ab28beadd42f3d43df13ee9df4605c40b02a0b529b95ef80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULRJKEU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgSnHlgY6iIEP8zm4J%2Fu7PpRH4OfK1L17ENyJCdsTzgIgOy2goBJ9MD3S9iq8glNuLYQggM%2F0ISeraeJreVrjhmEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJCxA%2FyOFMQFPCOhCrcA4KPxBUWezlBcBY0vyfiQT%2FB2xhanXVh%2FzmlRjlKLmxRI%2BSbkYSMjISljMoomoiuxKXbM6pdRrfTT7yv%2Bc9HcrSTKOCrTAjPrBN19MGqVK9%2F2hGJt%2B4jB0JUP4lfhFp%2BKG43qCUFjzh%2Fh4bgC6e2yeRV5Ilb%2F34kaoC9N9j%2B4Sc%2FNCvnsLk2ImgCqem2j8i%2BmX6IYcAy5yCRL0iijau2g2aqK6OUU7ahqiEzzywDSTnqWUKB5cS1%2Fm6zx6tk1YHl%2Be9a%2FeDAlalLG7tr%2BUXpRzvK1qpVa35X1JdTLPsLZD5vl4TReRWkoJ5IpNJ30tloKKZJiFmJoptKnD4j0Y%2FYkDCuw4vO6Pytno%2Bhey9pIEzNyrGZ332VphKPvZ9q%2FI3tOC5gpwQeP6MyNREcPTsZMJdqDlKL373%2Fm8Hme%2FYZb2zpXkLK57Sm5P7pyAuhiJZRGD72Ug%2FiKudIjCpiqABt0lCoNs0TFgK502fy9TwJSYgKHAW8a5lBG%2FUDf3hhDVOrLJV%2F6lin6YeJOKCV2oOnp9XJMYybUfPWdKMwsGw%2FNm8WADwPy83SluOpYOiVNzjSZSu2TR5%2BYkvUKg%2Fe2vn9fh97Ia0LfsKnkyC%2BhT2VXg5ZRz9syw9BH80xbQtjMP%2B41skGOqUBqG2mSrJUt2ECsXDYsDLpXqMIQbOC6jlOzM5FA6KyxlqPVf46KnxuKuc2ZkXFLlnXojkOctslVR2FCbvl3PPsHh8wxdQL4W8n4Ge%2F4Gw5bNswkerNS6qDCBfsBM2bhUQKn0c0REyLxEtL4fxGX4%2B3TpoFiDhM%2BAPSROYotOgkKV39WWj2It8P68JzElIDL6zC1uga51KsJylxWgz%2B45vck4h0scyk&X-Amz-Signature=de8943fbc3f8194fcbdf070697642f6408ad0487af95debaa165edcecc5f3c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

