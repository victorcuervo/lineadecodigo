---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53L2YFK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4iKMkjV5u44aykr6I6dK%2B8Bjch%2BHUjPr9yFJwgWnWawIhAPChFPRVXv1wWYYL%2BrefBL%2FvuF12RKFbHybrZ1MAZ41LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya6MWtiQxOEBvBNrYq3AOYjrCIGwxRFUTJdM6x4z0l7XlMl1DudLg3hhK9e1%2BPsYLil8LZ1tDSaxymM2PPNLYADDb4ayVO13g6ycheagUHpxboPqxsPHPWmcRx09zpJdvbXfX%2FgLcJERe5iKFP9ku0sr1TXs9H7xykonoS3gflGwIh1cos4nNnuYb1a%2FsnaxjoGvz1hlOXP3XZ3aliTfklx6CppP7n%2Ff0bJBO0XrymZbda4tXs%2BBF6RDpp%2BdrXTAmGkXCPc3soGyR%2FF0iS2yZzfl79nz2AGLHQlMLBExZbspnq2MQsoCGEzPvfA4EJkAFv18yzu5a9wP6R%2FtrcjwVHzcI5Q5SViHoliM87O7qtrvmvyp4Bxutiy1rgNT0yquT5%2B9cAX6h89259jwEZLZ3HfpNN7ZHWKH6tHlecS99edap%2FErUmOpJcPPHBBNloBwBHuGdCSKdzmYJc6LbzLvT%2Fs4y6nDyejqP5Yyd%2FMepI2T%2BG0zSPK3FMWWiK9LetTomsOhrrFkx59hgOK7d2MU9QqYMLWoeD3PO2WXOWj81i2rcn37bW8g5Q7EE67EZC%2FlOSdb%2F9IpbcYFaztLJimp4Ct8pywtBBgjuoKkJOl5qhieJkGNVJwJMVAo3dpo79VOWh57brW25BqEcUEzDYoNTJBjqkAfE9fCzw519yVkzppF4eTV2TxEmun7GaOtrnsdj0H5Vhkk4q9OhFdyk3%2Bw4eVRzGXGnPZpwPQeUsx3HWzFS3AGlnQ5AZTyvnHcSoy9JFDP56kjH%2FseeYQdSNHgPa33eJ5PAyTKfjxCcQSqYnFIwT1dT2CoFB3XWknczV8FMYgsmaBq7szAU4%2Bt9iVdhf63nqf5bLTvD1yKG4we0pBQ9%2ByowzwDlP&X-Amz-Signature=4f9ba6afe033ad3d817bf8249caa0910df2591b4d454e015dc85b989d6a66fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53L2YFK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4iKMkjV5u44aykr6I6dK%2B8Bjch%2BHUjPr9yFJwgWnWawIhAPChFPRVXv1wWYYL%2BrefBL%2FvuF12RKFbHybrZ1MAZ41LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya6MWtiQxOEBvBNrYq3AOYjrCIGwxRFUTJdM6x4z0l7XlMl1DudLg3hhK9e1%2BPsYLil8LZ1tDSaxymM2PPNLYADDb4ayVO13g6ycheagUHpxboPqxsPHPWmcRx09zpJdvbXfX%2FgLcJERe5iKFP9ku0sr1TXs9H7xykonoS3gflGwIh1cos4nNnuYb1a%2FsnaxjoGvz1hlOXP3XZ3aliTfklx6CppP7n%2Ff0bJBO0XrymZbda4tXs%2BBF6RDpp%2BdrXTAmGkXCPc3soGyR%2FF0iS2yZzfl79nz2AGLHQlMLBExZbspnq2MQsoCGEzPvfA4EJkAFv18yzu5a9wP6R%2FtrcjwVHzcI5Q5SViHoliM87O7qtrvmvyp4Bxutiy1rgNT0yquT5%2B9cAX6h89259jwEZLZ3HfpNN7ZHWKH6tHlecS99edap%2FErUmOpJcPPHBBNloBwBHuGdCSKdzmYJc6LbzLvT%2Fs4y6nDyejqP5Yyd%2FMepI2T%2BG0zSPK3FMWWiK9LetTomsOhrrFkx59hgOK7d2MU9QqYMLWoeD3PO2WXOWj81i2rcn37bW8g5Q7EE67EZC%2FlOSdb%2F9IpbcYFaztLJimp4Ct8pywtBBgjuoKkJOl5qhieJkGNVJwJMVAo3dpo79VOWh57brW25BqEcUEzDYoNTJBjqkAfE9fCzw519yVkzppF4eTV2TxEmun7GaOtrnsdj0H5Vhkk4q9OhFdyk3%2Bw4eVRzGXGnPZpwPQeUsx3HWzFS3AGlnQ5AZTyvnHcSoy9JFDP56kjH%2FseeYQdSNHgPa33eJ5PAyTKfjxCcQSqYnFIwT1dT2CoFB3XWknczV8FMYgsmaBq7szAU4%2Bt9iVdhf63nqf5bLTvD1yKG4we0pBQ9%2ByowzwDlP&X-Amz-Signature=d1befbde93745fe86ef77d5bfb83cf777e44f498a5ef3a8ef9cf82916d7be3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

