---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRELVBNK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANZUgPIVSfSANGCT%2FUkGvshZWcLP%2Bh1vOKw7n2mwz7mAiA%2FeenbO7H6agP5U1n%2FRt5oZYOiGEKViVlISiahXsH48SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwA1GXyiwaDUbstX%2FKtwDhcJ1PvJfXkl9nS1psGXKWqrl2k6cjs6vZPIRl7SCO5WmCF8U15YnO7F1%2Fb2FZ%2FOq6lQhPw7kj9QaYvgc8F2KVIZ8zSyVEC44o343wjtgBcs%2BOsU%2FYt281EkNXEQJWHzXf91lgp%2BbqW0J%2Bttppez96sbMBr7kl2cJ%2BoEzznYKjrdAhUJ%2FFwXX902Q2FqC9htxKOSkrleHMy4GA5L2pPAukzQyXLxK9h%2FIrWQU4PcLEqSHSCAiRpGx4x892rgRmiU5jgxKkJkc%2B7n5yoVYulkn5YY79qo56HG5xkmK%2FsSMsH16TGw2Dru87g6NW5s88YiO9qJLs7ArZdEpqAkNC%2BwCdIHHkxYCN5%2FQccVHgJbZBedrC25hFaeBzctTFoETynBO3ANF20nzY8EdZKV%2BapHDvD22Bydpe%2FqqQHGUWAzW0a4BH3ZHS%2BAOeTg0LCjAJTdde8pItFPZzIJ8jbJnju5emTrlLVRvZwV8pGECph77Nn00cDQKKKP38LosmhoEeqT9XlUjFKrdiMx6F2E%2BgHMWWHse1YVkKJPwkVVhwfwjRyHkvWtPYiYz2Np6C8hr8K66v0frKfOj3EOrMhjRyQeXomTWqkeiXPcpNcuOmxm5DCpFLGJzAdZj4vtBT9Iwj8PfyQY6pgFPzhrUoo6BHjps55pmq7h4nRLZg%2BJD5b3NNMdsMjD3ErwEad%2FyZJzruc2LaR4MfshMokwrEUHfA%2B2yOh9epPj0Exh7S4rHzMTm%2BFtxyXtCwaiZDXlpMM0Fp4LAkt8v7W92fYWZ34RNP4RBnZqaDd%2BUV%2BTGBTg80V6moZu2ZqxI%2FCQfDIvGVS9kK40xeHjTIMQW56Ew1dWcU1BglBGIhv82gFOGg3Yk&X-Amz-Signature=eb269bda4dc0e9a1d409bfcbe58b750e268c333c7f337872be5937f9be6aca04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRELVBNK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANZUgPIVSfSANGCT%2FUkGvshZWcLP%2Bh1vOKw7n2mwz7mAiA%2FeenbO7H6agP5U1n%2FRt5oZYOiGEKViVlISiahXsH48SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwA1GXyiwaDUbstX%2FKtwDhcJ1PvJfXkl9nS1psGXKWqrl2k6cjs6vZPIRl7SCO5WmCF8U15YnO7F1%2Fb2FZ%2FOq6lQhPw7kj9QaYvgc8F2KVIZ8zSyVEC44o343wjtgBcs%2BOsU%2FYt281EkNXEQJWHzXf91lgp%2BbqW0J%2Bttppez96sbMBr7kl2cJ%2BoEzznYKjrdAhUJ%2FFwXX902Q2FqC9htxKOSkrleHMy4GA5L2pPAukzQyXLxK9h%2FIrWQU4PcLEqSHSCAiRpGx4x892rgRmiU5jgxKkJkc%2B7n5yoVYulkn5YY79qo56HG5xkmK%2FsSMsH16TGw2Dru87g6NW5s88YiO9qJLs7ArZdEpqAkNC%2BwCdIHHkxYCN5%2FQccVHgJbZBedrC25hFaeBzctTFoETynBO3ANF20nzY8EdZKV%2BapHDvD22Bydpe%2FqqQHGUWAzW0a4BH3ZHS%2BAOeTg0LCjAJTdde8pItFPZzIJ8jbJnju5emTrlLVRvZwV8pGECph77Nn00cDQKKKP38LosmhoEeqT9XlUjFKrdiMx6F2E%2BgHMWWHse1YVkKJPwkVVhwfwjRyHkvWtPYiYz2Np6C8hr8K66v0frKfOj3EOrMhjRyQeXomTWqkeiXPcpNcuOmxm5DCpFLGJzAdZj4vtBT9Iwj8PfyQY6pgFPzhrUoo6BHjps55pmq7h4nRLZg%2BJD5b3NNMdsMjD3ErwEad%2FyZJzruc2LaR4MfshMokwrEUHfA%2B2yOh9epPj0Exh7S4rHzMTm%2BFtxyXtCwaiZDXlpMM0Fp4LAkt8v7W92fYWZ34RNP4RBnZqaDd%2BUV%2BTGBTg80V6moZu2ZqxI%2FCQfDIvGVS9kK40xeHjTIMQW56Ew1dWcU1BglBGIhv82gFOGg3Yk&X-Amz-Signature=bb67d50ad0da8203ad098d75b7a4d45dbd6a03af3057e6cbf1a46973a4947e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

