---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQKRTWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2Fptg5Wc3Yge8gRZUc4nm1%2FeOU0tuVpO6tuS5uICI3AIhAPKPRu4pEN1z4jfUlIfOy6%2F9mQyhEavKXn%2Brye7yeqeKKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqt3VF1pf3UEJJ6IEq3AMn1wxJbs0hpzbKtnYsQfVkbIOYGKbtVZumFPgMQbg0dAcXEwpBibXCiGUxsMlfpX8oZ%2FXuU0DUqq%2BF6mgJ4WyoqLeiyrSPcc7OoeZ5J4SJGw5jBPDaZ6fuUzm9ZHLYJZZqh9eBoazR1BQcAgeKNAQEKLcmx2az6wSIHeFXtBelb0itVODMhD7NUSJ3mAxBneR3iAJvmjlDZpdHmprUpkR5dKfBYqHPtrdgqGieH7y6nLcMO5dbLiLPAW55VUuvo4Hkfx1WiRydIUr71Q%2Fft7iXMD95RBZXxcKRw%2F4G7U2Dyaan%2F4n7kHF17HMc58yHOmKISTyoVMOfD1Ua8vDBKR23zZtwOu2dOz31TBr4nR0dCey810%2FcCsaQT%2F0dNcl8E4dCCg14CZaRxxvETTfooQytw3Rkkn6AZn86t%2B7xzVVXtq%2Fl%2FCDTaI8L8fNfOhnNDFqn%2BXRvPtaD%2Bgj7kZAKgv5JV9RqizHt5Hx7cT2dag9iEpr5ioscV5LFzz%2B%2FQHg5J7y%2FS%2BPgCe7wh21bMWDqkI5mIehXNqSDWYKOl83xGGYE3m7Z0eC0pxOqy8%2BYafeGhhkYxsfwxnSugU5XMqEZC86wlOGlgjL4a4IvXAJ5VzB1TcEiE8%2Ff0qlP9nsDRjC%2BmtXJBjqkAfTT2zAgOOxtg8cSosxyS999jTX%2F9svX36c3JDtWmq0%2BzL8UkMMYqBVKogHgoVt2wdYL3rmaw78qKPZ2IaPRq%2B%2ForGi7S1KuqDtInzq7CssDI0XL7brimHielEIuJuGqLYcGyxzwe4KTafQCft769zYSJy5TFovUROTN03NsqDfw8kU1uWCHzKVSp8zCDvYhSR%2FpsJAJDqf4iq4sA%2BPEOonco7r6&X-Amz-Signature=19a930255c353e65917f15f63da69b1c6699ae2ed560b7a4c59a29e9167145c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQKRTWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2Fptg5Wc3Yge8gRZUc4nm1%2FeOU0tuVpO6tuS5uICI3AIhAPKPRu4pEN1z4jfUlIfOy6%2F9mQyhEavKXn%2Brye7yeqeKKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqt3VF1pf3UEJJ6IEq3AMn1wxJbs0hpzbKtnYsQfVkbIOYGKbtVZumFPgMQbg0dAcXEwpBibXCiGUxsMlfpX8oZ%2FXuU0DUqq%2BF6mgJ4WyoqLeiyrSPcc7OoeZ5J4SJGw5jBPDaZ6fuUzm9ZHLYJZZqh9eBoazR1BQcAgeKNAQEKLcmx2az6wSIHeFXtBelb0itVODMhD7NUSJ3mAxBneR3iAJvmjlDZpdHmprUpkR5dKfBYqHPtrdgqGieH7y6nLcMO5dbLiLPAW55VUuvo4Hkfx1WiRydIUr71Q%2Fft7iXMD95RBZXxcKRw%2F4G7U2Dyaan%2F4n7kHF17HMc58yHOmKISTyoVMOfD1Ua8vDBKR23zZtwOu2dOz31TBr4nR0dCey810%2FcCsaQT%2F0dNcl8E4dCCg14CZaRxxvETTfooQytw3Rkkn6AZn86t%2B7xzVVXtq%2Fl%2FCDTaI8L8fNfOhnNDFqn%2BXRvPtaD%2Bgj7kZAKgv5JV9RqizHt5Hx7cT2dag9iEpr5ioscV5LFzz%2B%2FQHg5J7y%2FS%2BPgCe7wh21bMWDqkI5mIehXNqSDWYKOl83xGGYE3m7Z0eC0pxOqy8%2BYafeGhhkYxsfwxnSugU5XMqEZC86wlOGlgjL4a4IvXAJ5VzB1TcEiE8%2Ff0qlP9nsDRjC%2BmtXJBjqkAfTT2zAgOOxtg8cSosxyS999jTX%2F9svX36c3JDtWmq0%2BzL8UkMMYqBVKogHgoVt2wdYL3rmaw78qKPZ2IaPRq%2B%2ForGi7S1KuqDtInzq7CssDI0XL7brimHielEIuJuGqLYcGyxzwe4KTafQCft769zYSJy5TFovUROTN03NsqDfw8kU1uWCHzKVSp8zCDvYhSR%2FpsJAJDqf4iq4sA%2BPEOonco7r6&X-Amz-Signature=809cd251bd0da27bdfcb517e2a9b860f828962558880a35e69199408b84a945e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

