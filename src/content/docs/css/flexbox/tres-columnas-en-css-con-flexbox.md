---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2M3AIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICmOAQHOfXy%2Bh5%2Focjav%2BBROXJQqUVJX%2FUJhfx8GuYWLAiAcFWAh%2B7Ag7035vxjSI2%2B1TZe7%2BrpdSYD73W1lMewgsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8jP8oFWHD%2BvYZWNAKtwDA1dp5n%2BPf5Om3cjtaJgymvgkqvXMq1m2lhC5ID2PfoL63wbS7FFSWqojUnSnXaFWKKx%2Bok7ffjuemLUVHLL3gFYnNlv1shR4APbQB29WerLq0jhJkKFkCSbXR%2FyvLJ24cBOqCPRwSnkt4%2FmK1iQjEV9oygslmFmgQHYcAidHZHqZywmpV%2F9CJC894x0nJcD3Gj9wCAfJircQWkGUta9XsHnKWx10B3U11QQp4f76JVQNfEcB5AGJ8Iow3kPug7FxahUkwqDzyXCLEfbH9Lb7kmdpItTJ%2Bf3bhixPGLefTyUWoeKh%2B2X7LIxzKrKdKnmv3oGOAQheYHSMl5nCFPDLW%2FxOz6SzwPfm1TO2NNNXYmJDpRs8zAX%2BKOUJSQ3EzQhTHzCZDo1X10YD6rQcwbrBQkkdFPGKXjkUx%2BH5vjKG2Wml6E6FYLlWdXvNww%2FmY%2BPwwbKPQ1gxTBYXAamisM%2BfVBcG2nehzjg1NBmKl4G7twsy45F4RgwjvDgzfQbFQfMu3AYwhciJrQSSqi95zpLGsgepcsGW15aUR0IW3CHAW0niSdeHZYCbnym%2B52vIZhjLMm7hTtBJ%2FL7jDcfCwyT0%2BA%2FaSouK8vgeZSeFt21F7M2SG0gz0NWCXv9AGBIwxITGyQY6pgE6MMRYrmZb2QrBqovKz9Ei6xzqDY%2BgsqCO2yCGMMJZlcLttNWSA0sFZjQdP0VeZ4Yi73k3Af5oscTbTTQlBNVrpAd26gcodxhwZ%2FJe6UsR5gZHRbh3NEa7UTP4RkrYaBZhqkgSBMOQndXn4LysIkJ9VhcPNffD0WlnAVUazZoxFdKTtnqwEzXFgO%2BqEyn%2BX5D3kmZLhpmc2E92JdQp%2FcwT9vvffotG&X-Amz-Signature=8e4dbd893a1b007f126fa3be8ee5d23564e30fcb19329b4b4688fe0f5df4a69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2M3AIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICmOAQHOfXy%2Bh5%2Focjav%2BBROXJQqUVJX%2FUJhfx8GuYWLAiAcFWAh%2B7Ag7035vxjSI2%2B1TZe7%2BrpdSYD73W1lMewgsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8jP8oFWHD%2BvYZWNAKtwDA1dp5n%2BPf5Om3cjtaJgymvgkqvXMq1m2lhC5ID2PfoL63wbS7FFSWqojUnSnXaFWKKx%2Bok7ffjuemLUVHLL3gFYnNlv1shR4APbQB29WerLq0jhJkKFkCSbXR%2FyvLJ24cBOqCPRwSnkt4%2FmK1iQjEV9oygslmFmgQHYcAidHZHqZywmpV%2F9CJC894x0nJcD3Gj9wCAfJircQWkGUta9XsHnKWx10B3U11QQp4f76JVQNfEcB5AGJ8Iow3kPug7FxahUkwqDzyXCLEfbH9Lb7kmdpItTJ%2Bf3bhixPGLefTyUWoeKh%2B2X7LIxzKrKdKnmv3oGOAQheYHSMl5nCFPDLW%2FxOz6SzwPfm1TO2NNNXYmJDpRs8zAX%2BKOUJSQ3EzQhTHzCZDo1X10YD6rQcwbrBQkkdFPGKXjkUx%2BH5vjKG2Wml6E6FYLlWdXvNww%2FmY%2BPwwbKPQ1gxTBYXAamisM%2BfVBcG2nehzjg1NBmKl4G7twsy45F4RgwjvDgzfQbFQfMu3AYwhciJrQSSqi95zpLGsgepcsGW15aUR0IW3CHAW0niSdeHZYCbnym%2B52vIZhjLMm7hTtBJ%2FL7jDcfCwyT0%2BA%2FaSouK8vgeZSeFt21F7M2SG0gz0NWCXv9AGBIwxITGyQY6pgE6MMRYrmZb2QrBqovKz9Ei6xzqDY%2BgsqCO2yCGMMJZlcLttNWSA0sFZjQdP0VeZ4Yi73k3Af5oscTbTTQlBNVrpAd26gcodxhwZ%2FJe6UsR5gZHRbh3NEa7UTP4RkrYaBZhqkgSBMOQndXn4LysIkJ9VhcPNffD0WlnAVUazZoxFdKTtnqwEzXFgO%2BqEyn%2BX5D3kmZLhpmc2E92JdQp%2FcwT9vvffotG&X-Amz-Signature=48d616d48926570f3c2b35b5d36b2e3a517d4fe010bfc8f4b1cc1aeb3abc027f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

