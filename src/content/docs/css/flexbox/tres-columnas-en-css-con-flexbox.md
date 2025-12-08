---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=0d282a103e91cec46b5869a1eaf2e5fd723a5fcd9a199af7c2dc8e497766ae49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=3fa04e6d2ba5803973288dc6057bc1ca91a704b715adae014b1756d79525564d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

