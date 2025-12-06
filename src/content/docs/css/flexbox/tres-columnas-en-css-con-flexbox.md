---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVSHKZ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw093WuYg80t6gTuaMJldJXKzjgS1ZpFxmZYW12U2XDAIhAOdNA8mfVby3xJofoL%2BTn%2BiSPY9og2xPTwkBX7%2Fuc4DfKv8DCG0QABoMNjM3NDIzMTgzODA1Igw0hEQDGrFx%2FZub%2B40q3ANVLhgRGZW4utuGPPIS5ZKNYSvPh85rfGeg%2FRPIX8edHi0uBnyA%2FISSssb3MKGT4e0WFX4DShi8oMcwS%2F64CWKhJ1MxIluNYLOyvFjm5OnmqRx7F%2BMZsdxq4GCBWylJ09lmatXNiPNw7rZWj3W3Iu75ZbdZMGrbDkjJmk0pllSHm0Ci5FhnESTLka0F7P6M0Ep9TtiYOYLTDiHSIFdTKWn9o4MxPNgJ5S8ZP%2FxfjHLN3LgVdPmqiMFMFpm2IQ9sRla6II8%2Fc4V5JyhJnOCOHQjQdePFZIThTxgVj7khzwzv719D%2BcnfjU%2FZGvAm1uAxgwbO9hpSiGjPp52Wpo0Vqwz9TUlluWNtsYeG2gLVoZIWQIRRxdPJnOzczUPfTUPJQQWCTP6FPurO5iucrAQIw3p5DPZr3tvWgbaRGQbaNQyy8J6o9DNhgsrDU2qYu15LXtp9%2Fu6dX7eY%2Ft2y04VPvUGrEteKVURlZbbfi1h8VgLAlGWQGnhNJYldwOaRl5No4nUTgwe2MpmIprjFpQ3XWllS9tQSX2j4YYeVsBAf7woIqgRHPn34G3fRQNtkfRK2GL1Ux6%2FxzLK0lHO3kMSRbzqDXwDtBMBe7sjJejsKUKQH2JpYawJks63NS%2Fw7KjC13s7JBjqkAei39ThRrBAnSBTxH8bXYm0PATdYzfo2Ph5wqt8rb2HGhsfMfSNs5WTKycWv9yYr%2BDaAGSyfhI9%2BDHI9H642d2j8Q9E7vVfoXCVzmtYtmzeA9iag8xsvcE7HgW%2FFIcst9u9OoaU3uTSbCkus5aRipRcTg1%2BGMQQrgWT9w9caAq%2FgVlHfal603YDVEbYtdsTlrgkUqIR8YZ3lSLl%2FxQlkri7R7BWQ&X-Amz-Signature=bfc7f066d7fd3b609ee0a2a52487c1e59470c61b4a758380597428fecabdf5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVSHKZ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw093WuYg80t6gTuaMJldJXKzjgS1ZpFxmZYW12U2XDAIhAOdNA8mfVby3xJofoL%2BTn%2BiSPY9og2xPTwkBX7%2Fuc4DfKv8DCG0QABoMNjM3NDIzMTgzODA1Igw0hEQDGrFx%2FZub%2B40q3ANVLhgRGZW4utuGPPIS5ZKNYSvPh85rfGeg%2FRPIX8edHi0uBnyA%2FISSssb3MKGT4e0WFX4DShi8oMcwS%2F64CWKhJ1MxIluNYLOyvFjm5OnmqRx7F%2BMZsdxq4GCBWylJ09lmatXNiPNw7rZWj3W3Iu75ZbdZMGrbDkjJmk0pllSHm0Ci5FhnESTLka0F7P6M0Ep9TtiYOYLTDiHSIFdTKWn9o4MxPNgJ5S8ZP%2FxfjHLN3LgVdPmqiMFMFpm2IQ9sRla6II8%2Fc4V5JyhJnOCOHQjQdePFZIThTxgVj7khzwzv719D%2BcnfjU%2FZGvAm1uAxgwbO9hpSiGjPp52Wpo0Vqwz9TUlluWNtsYeG2gLVoZIWQIRRxdPJnOzczUPfTUPJQQWCTP6FPurO5iucrAQIw3p5DPZr3tvWgbaRGQbaNQyy8J6o9DNhgsrDU2qYu15LXtp9%2Fu6dX7eY%2Ft2y04VPvUGrEteKVURlZbbfi1h8VgLAlGWQGnhNJYldwOaRl5No4nUTgwe2MpmIprjFpQ3XWllS9tQSX2j4YYeVsBAf7woIqgRHPn34G3fRQNtkfRK2GL1Ux6%2FxzLK0lHO3kMSRbzqDXwDtBMBe7sjJejsKUKQH2JpYawJks63NS%2Fw7KjC13s7JBjqkAei39ThRrBAnSBTxH8bXYm0PATdYzfo2Ph5wqt8rb2HGhsfMfSNs5WTKycWv9yYr%2BDaAGSyfhI9%2BDHI9H642d2j8Q9E7vVfoXCVzmtYtmzeA9iag8xsvcE7HgW%2FFIcst9u9OoaU3uTSbCkus5aRipRcTg1%2BGMQQrgWT9w9caAq%2FgVlHfal603YDVEbYtdsTlrgkUqIR8YZ3lSLl%2FxQlkri7R7BWQ&X-Amz-Signature=2ae3937b1ed56ba4ef34d41a94b5cb05f432495cadc07818689fd96388264c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

