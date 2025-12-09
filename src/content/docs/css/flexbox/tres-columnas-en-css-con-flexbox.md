---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GPUP3Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPAqwsNj8%2FCcGcMN9RGX6w4quL6w0K5eEs167zXgZQ%2FAiBEOZpds9uio9rk73nTBa1NNmCtQ4QkNQ0AV4ofx%2Fc3OSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOS9BkpXXFspJENxtKtwDo%2F9hqGbYRAtwgrUBbE%2F3cecZXXDWm41ASVg8sg39eOebcNL%2BP2S8r%2BtLgZpCvqJqGbdKtdpx1WJHONdPz%2Ff0zIYUGaymGD51gxrQUcBfCA2PkRX2JG6UGMt7u3ZIDAbArI3dJYTFPXYBH%2FXs%2FhSixtX5QknjbZUo2cobk2KPDy4IJymgrt87UuAoVQZ%2Fquiy6lMC4EQExUq5oliN%2BucexK%2FtfmIRB3QNpiciX5RhD9Pl%2B9aZZ4pdEFvG%2FhZx7UAPejhQ8%2BKYomlp1YjQjZ%2Fm4k5YQYQujPoSnV0VcBoKWZnSFBGUm6fL%2BwQYuLgB3XmKlC%2BqiOGvLGUl8ZRh6UtoN%2BIv6OdbORlXn%2BQaBxuf2I8iuqUFsiUrrbfw3vyuIWOf9oZ%2B91yyWeBPEqEh6eUu6irGmGn2cL5DpwE5xSM648A1kONCGGHgwpM09sUi3hqwAiFw56heRY8mRkO7m6G3tTMX2FkaSwj5qKKHRMAjiaFtnOp7Tuvvl19t0f0Kp6e%2BezAY4%2BvH8afpPvquk3boGNDBchvyCaNwQ3C0MyKIXju%2FuOW4ubD7oVNqQ9WAQcHaCOgEzFK24XykqyDPzwKG%2Fq7MDPvfKK4%2FNNKY7DjJfvgkPvmCy4rPdagSxH4w%2BoffyQY6pgGoZFHJ%2F%2FCW0BMCPOqDy7mbV3%2B8Hn%2FWMx6x2tOdG1WsRIkiwIPfY0YhBRqykE6b4JL5x4T6pyJFWzjR8BlS2lFX8jWle%2FbXWOre7WgCVZLdzlGoN308ULSv4wL1vZ2ry6QuA4RQU%2BDpOSzBHQKvPupQ2zDqJDArXUYh%2BzosHVYoHVr1LKudGDmCNYUYTUy0sgVxK8ggHF6gvm%2FFkcmCke8eICik88AO&X-Amz-Signature=5c99f06ee96bda6978b9a2134ececaa1c81d6e70e7abe9961341149e4aca6896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GPUP3Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPAqwsNj8%2FCcGcMN9RGX6w4quL6w0K5eEs167zXgZQ%2FAiBEOZpds9uio9rk73nTBa1NNmCtQ4QkNQ0AV4ofx%2Fc3OSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOS9BkpXXFspJENxtKtwDo%2F9hqGbYRAtwgrUBbE%2F3cecZXXDWm41ASVg8sg39eOebcNL%2BP2S8r%2BtLgZpCvqJqGbdKtdpx1WJHONdPz%2Ff0zIYUGaymGD51gxrQUcBfCA2PkRX2JG6UGMt7u3ZIDAbArI3dJYTFPXYBH%2FXs%2FhSixtX5QknjbZUo2cobk2KPDy4IJymgrt87UuAoVQZ%2Fquiy6lMC4EQExUq5oliN%2BucexK%2FtfmIRB3QNpiciX5RhD9Pl%2B9aZZ4pdEFvG%2FhZx7UAPejhQ8%2BKYomlp1YjQjZ%2Fm4k5YQYQujPoSnV0VcBoKWZnSFBGUm6fL%2BwQYuLgB3XmKlC%2BqiOGvLGUl8ZRh6UtoN%2BIv6OdbORlXn%2BQaBxuf2I8iuqUFsiUrrbfw3vyuIWOf9oZ%2B91yyWeBPEqEh6eUu6irGmGn2cL5DpwE5xSM648A1kONCGGHgwpM09sUi3hqwAiFw56heRY8mRkO7m6G3tTMX2FkaSwj5qKKHRMAjiaFtnOp7Tuvvl19t0f0Kp6e%2BezAY4%2BvH8afpPvquk3boGNDBchvyCaNwQ3C0MyKIXju%2FuOW4ubD7oVNqQ9WAQcHaCOgEzFK24XykqyDPzwKG%2Fq7MDPvfKK4%2FNNKY7DjJfvgkPvmCy4rPdagSxH4w%2BoffyQY6pgGoZFHJ%2F%2FCW0BMCPOqDy7mbV3%2B8Hn%2FWMx6x2tOdG1WsRIkiwIPfY0YhBRqykE6b4JL5x4T6pyJFWzjR8BlS2lFX8jWle%2FbXWOre7WgCVZLdzlGoN308ULSv4wL1vZ2ry6QuA4RQU%2BDpOSzBHQKvPupQ2zDqJDArXUYh%2BzosHVYoHVr1LKudGDmCNYUYTUy0sgVxK8ggHF6gvm%2FFkcmCke8eICik88AO&X-Amz-Signature=c828e723c5eebf94b5dc27eb1dcec89bae327644105571d672f6a69cadee101a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

