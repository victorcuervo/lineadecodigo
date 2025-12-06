---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAD5SIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYW5LJEio6dV8Fq6UskMYIKC50vbyOaaHDQ3ZUsZxCCwIhALVyvVB6rgZROpd6Rc2t%2Bi%2FSrcyv5lfU8j7egyYl0P2UKv8DCG0QABoMNjM3NDIzMTgzODA1IgwbX1HudbJJzihap30q3AMKzwTb2CYfSIFEh3YPePOpYs6EeAahAo5hjneL%2BSAl1opVYrIRPmufgmSjDIO2%2Bgoy8Um5kACvP%2FsaYpk4ZSza1GpVI2985HHrQo6TPOsx5bCjoXszgDG2r5yN4GF%2FYbIFDFOn6stv%2Bjfn%2BdYaRnSVyUcwyi1Z2CKkeJKHBMLIXlxQZWtKgOgYQpf3xNhKObMxIUTuKAoNvG4QlRsIGVWVHJuAjjYFmS%2FXDgTG45Xxq2AdMyzFxOkppqNMwwUBU4Q2IwL61OEbqift%2BkJdrYVRCUpIz0Ar%2BMNBo1XiCdCiClvHPC4YoX0febr%2FAwxavmU%2FEwJygziMF9dwe1m7ltoIDJQwtC%2BqyK7dbJ%2FclroLYBK2da%2FgwLPk%2Bg7zbv9Ne8tPMFptz9UrUlxpjZbjiVXZYWHhJd8XkY0T373%2BwH4g9LwojWuB2cu2ZkgHdvm%2Fb6s%2Flj5vYGwMO%2BvSNyAFtvgxzaxKOBt%2BUDVunCDyisvLMCg%2BpBoBBrokPyeyuBb4aCzQGpCZAQDuC9hz9Ts56mjyRLJ0OiugTHip3XRh1e09aAiajoUQ95U%2B%2FWB6SxATiy%2BkoqxUFLAcv1bA4PpzPUMKiHYknEwBFfilQpzYuzQjhgQxauHXKFncwFA8HjDt3c7JBjqkAZJSTn8DDXqJGtnjZ9GcWF5VKF8n4woILprk%2F8pLSkMSiMhvsVTPtoo%2FCurgJdJpVTw%2Fe%2B%2Bfuhuodd3a%2F7xr5DOZ2YeaEte46Sddmbk3FJMsjK7fqV3cBFF1gJbeuIzcT05CAo7z%2FuzHKo79OUDZXfdbA%2F4rNQdzZb49VwA5VkvKgJmzeSPTwL07uREsq687VS9WZsR9O%2FlFnC%2FRQPgETVuR0cKx&X-Amz-Signature=bf4ebf1001be7af469d9bc7a8e1970a49b8837a24a75473d162cee1e70ad0a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAD5SIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYW5LJEio6dV8Fq6UskMYIKC50vbyOaaHDQ3ZUsZxCCwIhALVyvVB6rgZROpd6Rc2t%2Bi%2FSrcyv5lfU8j7egyYl0P2UKv8DCG0QABoMNjM3NDIzMTgzODA1IgwbX1HudbJJzihap30q3AMKzwTb2CYfSIFEh3YPePOpYs6EeAahAo5hjneL%2BSAl1opVYrIRPmufgmSjDIO2%2Bgoy8Um5kACvP%2FsaYpk4ZSza1GpVI2985HHrQo6TPOsx5bCjoXszgDG2r5yN4GF%2FYbIFDFOn6stv%2Bjfn%2BdYaRnSVyUcwyi1Z2CKkeJKHBMLIXlxQZWtKgOgYQpf3xNhKObMxIUTuKAoNvG4QlRsIGVWVHJuAjjYFmS%2FXDgTG45Xxq2AdMyzFxOkppqNMwwUBU4Q2IwL61OEbqift%2BkJdrYVRCUpIz0Ar%2BMNBo1XiCdCiClvHPC4YoX0febr%2FAwxavmU%2FEwJygziMF9dwe1m7ltoIDJQwtC%2BqyK7dbJ%2FclroLYBK2da%2FgwLPk%2Bg7zbv9Ne8tPMFptz9UrUlxpjZbjiVXZYWHhJd8XkY0T373%2BwH4g9LwojWuB2cu2ZkgHdvm%2Fb6s%2Flj5vYGwMO%2BvSNyAFtvgxzaxKOBt%2BUDVunCDyisvLMCg%2BpBoBBrokPyeyuBb4aCzQGpCZAQDuC9hz9Ts56mjyRLJ0OiugTHip3XRh1e09aAiajoUQ95U%2B%2FWB6SxATiy%2BkoqxUFLAcv1bA4PpzPUMKiHYknEwBFfilQpzYuzQjhgQxauHXKFncwFA8HjDt3c7JBjqkAZJSTn8DDXqJGtnjZ9GcWF5VKF8n4woILprk%2F8pLSkMSiMhvsVTPtoo%2FCurgJdJpVTw%2Fe%2B%2Bfuhuodd3a%2F7xr5DOZ2YeaEte46Sddmbk3FJMsjK7fqV3cBFF1gJbeuIzcT05CAo7z%2FuzHKo79OUDZXfdbA%2F4rNQdzZb49VwA5VkvKgJmzeSPTwL07uREsq687VS9WZsR9O%2FlFnC%2FRQPgETVuR0cKx&X-Amz-Signature=b9e1a99a211d7c60825a78911635e095ed051c2609c5135d1cb6181ab056d50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

