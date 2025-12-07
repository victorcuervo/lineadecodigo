---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4IC4UN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VE%2FMPN3vtC71ETbkcKsIcQwudrvKtFoXMmB2MisaZAIhAPIsFk4olyfmr%2F3Igu2NZBd3EE3bLTROv7poAaFG5sRqKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvyh37R9bl0bbQzwUq3ANPokT9rg83qI8XH3DcJUKDifjAFWEzU2%2B88DC%2BHdral2gWrE52jUZT7Hq%2FqcHLzEejOb7C5%2FewrWc4%2BDa3eWxXQjrMCf403kTReyhCXoLX3K5N3z7N%2BpsKRLaLm4nPNp6kbMz%2BDMNgHJpExy7EjTFCGwbMch%2BjcufAUBSPfsYQKeIYj8Kzyp04z6QqUi6Bl4SFxV16AA8gCeW%2BFRg0ikjd5xL2NKjHpzjIK7Lhgv3TO8ZR5GU9YihOfFrC2nnG94yNwkNHEow49H6ox8UO6%2FPjFxTwyobUicym3ai8L8TTMCnu%2BuTFegJ2yXcCdDiJ268xS4h897DqZW9rN5C%2B86U6HhDfNqVyCXO6cXIAhdz4915MfYIlUzYmskkLy%2FiIIPjCxCHc4pKoNjUKd%2B1%2BDN%2BY23NUhPBknxv3sHUr6gPqXBQ4cwgKltX3jfaA9XgniF1voBvknwhKiJSId2qdMrmRWXFXAtlOa%2BpSqHftDZJB7xfhHLeQEyO7dKgaln0a0IxB8ZwBuXnp9BuN2R%2F6MQCQyks28rABWeLHPf%2BDyKfuEyrHtRQQP6dtqPYUBzL8u1dYL%2Fsv8hW0r8rw6Bb4QTFKMLLDSaEDh1ej6YIzs%2B0AJPek45HVL8h7TKnKQTCCyNfJBjqkAfRu%2FUE41jqiacqcWzyXhndWWZBxrUBwZnZbvFbmnEn%2Frdt0pUKhD5josc1Iy%2F%2F2dOPFUzO6LRVcdxsogar8PlEuCVUnKXgaQOLYaSTvBVdB5JXjoBiWMoS%2FR8WT8mv04I6WFlyihfyNHDGIuRXpb0dpVVaJxQ8lf6ix4F0tL1ibjDC6kIhl9DJrQsDRhzCUVXUfakh%2BIEA6neKOQGoDkKiowsCw&X-Amz-Signature=2a8b1b917dd2f2e19ad0b505e92c6009de253d6398a9418ecc92b4b55477e41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4IC4UN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VE%2FMPN3vtC71ETbkcKsIcQwudrvKtFoXMmB2MisaZAIhAPIsFk4olyfmr%2F3Igu2NZBd3EE3bLTROv7poAaFG5sRqKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvyh37R9bl0bbQzwUq3ANPokT9rg83qI8XH3DcJUKDifjAFWEzU2%2B88DC%2BHdral2gWrE52jUZT7Hq%2FqcHLzEejOb7C5%2FewrWc4%2BDa3eWxXQjrMCf403kTReyhCXoLX3K5N3z7N%2BpsKRLaLm4nPNp6kbMz%2BDMNgHJpExy7EjTFCGwbMch%2BjcufAUBSPfsYQKeIYj8Kzyp04z6QqUi6Bl4SFxV16AA8gCeW%2BFRg0ikjd5xL2NKjHpzjIK7Lhgv3TO8ZR5GU9YihOfFrC2nnG94yNwkNHEow49H6ox8UO6%2FPjFxTwyobUicym3ai8L8TTMCnu%2BuTFegJ2yXcCdDiJ268xS4h897DqZW9rN5C%2B86U6HhDfNqVyCXO6cXIAhdz4915MfYIlUzYmskkLy%2FiIIPjCxCHc4pKoNjUKd%2B1%2BDN%2BY23NUhPBknxv3sHUr6gPqXBQ4cwgKltX3jfaA9XgniF1voBvknwhKiJSId2qdMrmRWXFXAtlOa%2BpSqHftDZJB7xfhHLeQEyO7dKgaln0a0IxB8ZwBuXnp9BuN2R%2F6MQCQyks28rABWeLHPf%2BDyKfuEyrHtRQQP6dtqPYUBzL8u1dYL%2Fsv8hW0r8rw6Bb4QTFKMLLDSaEDh1ej6YIzs%2B0AJPek45HVL8h7TKnKQTCCyNfJBjqkAfRu%2FUE41jqiacqcWzyXhndWWZBxrUBwZnZbvFbmnEn%2Frdt0pUKhD5josc1Iy%2F%2F2dOPFUzO6LRVcdxsogar8PlEuCVUnKXgaQOLYaSTvBVdB5JXjoBiWMoS%2FR8WT8mv04I6WFlyihfyNHDGIuRXpb0dpVVaJxQ8lf6ix4F0tL1ibjDC6kIhl9DJrQsDRhzCUVXUfakh%2BIEA6neKOQGoDkKiowsCw&X-Amz-Signature=64e136928e7ce5ac9bdf2d2bfffabd9c17b419737d1ab84513cb9c8c9300efa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

