---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PKCTJG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRrJ2n1UVur2Jj7JC1yu3bYKNGdOwEaGu45KMOmnz2ZwIhAKOLi%2B3UGS0y1i4r0FfhUJvhwe38bYhrrsNHQPOLPL6RKv8DCE8QABoMNjM3NDIzMTgzODA1Igzf3%2BwL%2B1z6ezMAQTwq3ANeTkJFmVjkI88rP0tLtMnx8mPmEENQuHwJpfdlm08IrTIO6j62PxoFU1yEf8F3z4ldED3XQsZbtw32FPgH2Z3N%2FBkrBhj%2BomDigx96C3TZ4U9rRZ3GXVqNZLUMfwffw8j9V0ZMguU2lpA0KJxQEllU50T8qV4wZDamxLtb9KQaVVh26n0wHfvnSzsBI7jcsLBH5ZHLDeq2Mv0jJ9d2vaFKQ02FxXwL5BUQiQrq3cKFRSsLntnButwqMiluR5syBH%2BKQJYPQ0wiT%2F01JLl6JO6wCfJ1sIpYMibwFC9nrYxSnIIZKuBW6P8YCk1RHudqCGo9lDF2RwzAwwMWq6JpnU0PJCoV8liIyuStQwcZvY7nCkYL%2B6FwC9oRtciXo5CnxzlTL7qAAvEixz8IXeX39zP0X%2FBTJiP0am%2B8KKBoKezrFxZhn1dFPzwHzQGNWaOxk9HS4heCB%2FIfWzNXgQW4s900v3CY5j%2FLBguwNFyvTQU7tj8LK9rPf9bXWWtkwGIZ%2FOnwj4t%2BS%2Bw%2FP1Gv3HoUhYfE9u2q%2FBvaP%2FiJzc4Eqp8ytAdcnNtccyVckDb4xANTImpUQt0TQ9X%2BpIb69joIN5K9Dh%2BpReZCKzWC%2FD%2BuDXYanTwG8kNh6NZ%2BaOGQ8jCejMjJBjqkAfSgp7clomKDOO%2B8cxvG8XcoVgz25o1TpPHfpcFX8wnW%2FpArHDaWU3rhgvVXSC0QbYAlNiN8fT114poxwKIX7emAV3GW0Hs994rUFEk7LcuR1QgvA3Ov145C75J%2Fv4ja0FKf4unzsCiavdapNnrCMiqi40OkDqObCTLxijkidep%2BKBiEel2gLSvp1H7bK2KY11oluA1D%2B7h4Edy5LkKweZZVoC40&X-Amz-Signature=64d77247ebf79cbfe13b13cc3ffbe1ddafd761aac8ae9b2ad99a33d9d7f5e151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PKCTJG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRrJ2n1UVur2Jj7JC1yu3bYKNGdOwEaGu45KMOmnz2ZwIhAKOLi%2B3UGS0y1i4r0FfhUJvhwe38bYhrrsNHQPOLPL6RKv8DCE8QABoMNjM3NDIzMTgzODA1Igzf3%2BwL%2B1z6ezMAQTwq3ANeTkJFmVjkI88rP0tLtMnx8mPmEENQuHwJpfdlm08IrTIO6j62PxoFU1yEf8F3z4ldED3XQsZbtw32FPgH2Z3N%2FBkrBhj%2BomDigx96C3TZ4U9rRZ3GXVqNZLUMfwffw8j9V0ZMguU2lpA0KJxQEllU50T8qV4wZDamxLtb9KQaVVh26n0wHfvnSzsBI7jcsLBH5ZHLDeq2Mv0jJ9d2vaFKQ02FxXwL5BUQiQrq3cKFRSsLntnButwqMiluR5syBH%2BKQJYPQ0wiT%2F01JLl6JO6wCfJ1sIpYMibwFC9nrYxSnIIZKuBW6P8YCk1RHudqCGo9lDF2RwzAwwMWq6JpnU0PJCoV8liIyuStQwcZvY7nCkYL%2B6FwC9oRtciXo5CnxzlTL7qAAvEixz8IXeX39zP0X%2FBTJiP0am%2B8KKBoKezrFxZhn1dFPzwHzQGNWaOxk9HS4heCB%2FIfWzNXgQW4s900v3CY5j%2FLBguwNFyvTQU7tj8LK9rPf9bXWWtkwGIZ%2FOnwj4t%2BS%2Bw%2FP1Gv3HoUhYfE9u2q%2FBvaP%2FiJzc4Eqp8ytAdcnNtccyVckDb4xANTImpUQt0TQ9X%2BpIb69joIN5K9Dh%2BpReZCKzWC%2FD%2BuDXYanTwG8kNh6NZ%2BaOGQ8jCejMjJBjqkAfSgp7clomKDOO%2B8cxvG8XcoVgz25o1TpPHfpcFX8wnW%2FpArHDaWU3rhgvVXSC0QbYAlNiN8fT114poxwKIX7emAV3GW0Hs994rUFEk7LcuR1QgvA3Ov145C75J%2Fv4ja0FKf4unzsCiavdapNnrCMiqi40OkDqObCTLxijkidep%2BKBiEel2gLSvp1H7bK2KY11oluA1D%2B7h4Edy5LkKweZZVoC40&X-Amz-Signature=fcac0dc051b16223cb307971d5bb39a664f6eb82ea27d3c38268635865247a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

