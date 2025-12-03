---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMB7SJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCWmC5Frua1320qKtopj6fIb%2FjvHX5JrL9ORftLWCrFqQIgKVL7I2T6EPm6GZ6gNISt2hmfMl7N43xW4ZpYHiy9Q6gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH953Zy3bJ6%2BYsSLAircA7k7rtpDLrO%2FAQXXzilDZCraB0Fo3qnT46c0gBBC5nif8P5XvVHCUj1AJCZCQ0EpaPexBvAjTaF%2BjL5MK15k4BC%2F14%2F6ISSV4DvCFLNJ%2FzgIkSPWu3ZIjdYlCwE4j1y48Nsew3gpJsXx44a%2BGJCgNe1lzeZfdcRAGtWZgIJSvxD%2FBqVbXTPPOviaeo9W4WH5zjSiNFU2UUu0IT7L9TVM28nlVaQSK7Q5IAszWTnxvFhExtUhQPHr66d7WJXlB3RltqK8Herzp%2FcJqEZ58O1ETPc5JFzOB%2BV2SrBzi%2BqZqmy6LVbFaAt7q8vBR2E1eQvjflQyO2Rwy9gJrOmZmGWpkDlydvrXTX7HQQ%2FV0ACk%2FsIY5XTPzt7MMRDWfCpmVGks0DPP60t2TZLXHR%2FcLPiVYsxjoY%2F7nTAvn5jgGgxw5LPTfvz7HWvDhinphGqKHFxkNUp3ZZxzx79tQ9efptzVvruGdZMtJda77ZeiYazYu%2BLvJnEaoyWbSDfo27WvOl%2Buw1Kseyf8LlAuatnwBRWhqX3%2FlNt4VEPVUHgoitk0nzatgJDVaXi2ImrZswvQ8KxZRm4LGoZe96XIqf7pOxT3JBvZt%2BrUvTFa2nnj2l3Q4%2BO68EWcqWlqVESonxQ8ML2SwMkGOqUBwLLa%2B2ay0ImEkkANUF8otWnv6l6B5zvb44Nx5Aw%2Ft04cptfyXo3RoM88%2FuYk5%2Bbzf05%2FReexF%2FRRhPE2dhFR954b%2Fgzhhx5p6jCn1r3FXcN3w1DMEYn%2BoRc5a90POPbBMIR8HdVeoIZvGNz8ifTMJdemRdD7Fem9A5Y8mC%2FSKx2P9ZI4d%2FoyEtVVMGlE5ol98zqWIepzlIMCJqxu7U4ChDaFt3ka&X-Amz-Signature=a9cea0bc214980623cbfb0d68830896101f8182d918a0430721bb8cf91d056d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMB7SJV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCWmC5Frua1320qKtopj6fIb%2FjvHX5JrL9ORftLWCrFqQIgKVL7I2T6EPm6GZ6gNISt2hmfMl7N43xW4ZpYHiy9Q6gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH953Zy3bJ6%2BYsSLAircA7k7rtpDLrO%2FAQXXzilDZCraB0Fo3qnT46c0gBBC5nif8P5XvVHCUj1AJCZCQ0EpaPexBvAjTaF%2BjL5MK15k4BC%2F14%2F6ISSV4DvCFLNJ%2FzgIkSPWu3ZIjdYlCwE4j1y48Nsew3gpJsXx44a%2BGJCgNe1lzeZfdcRAGtWZgIJSvxD%2FBqVbXTPPOviaeo9W4WH5zjSiNFU2UUu0IT7L9TVM28nlVaQSK7Q5IAszWTnxvFhExtUhQPHr66d7WJXlB3RltqK8Herzp%2FcJqEZ58O1ETPc5JFzOB%2BV2SrBzi%2BqZqmy6LVbFaAt7q8vBR2E1eQvjflQyO2Rwy9gJrOmZmGWpkDlydvrXTX7HQQ%2FV0ACk%2FsIY5XTPzt7MMRDWfCpmVGks0DPP60t2TZLXHR%2FcLPiVYsxjoY%2F7nTAvn5jgGgxw5LPTfvz7HWvDhinphGqKHFxkNUp3ZZxzx79tQ9efptzVvruGdZMtJda77ZeiYazYu%2BLvJnEaoyWbSDfo27WvOl%2Buw1Kseyf8LlAuatnwBRWhqX3%2FlNt4VEPVUHgoitk0nzatgJDVaXi2ImrZswvQ8KxZRm4LGoZe96XIqf7pOxT3JBvZt%2BrUvTFa2nnj2l3Q4%2BO68EWcqWlqVESonxQ8ML2SwMkGOqUBwLLa%2B2ay0ImEkkANUF8otWnv6l6B5zvb44Nx5Aw%2Ft04cptfyXo3RoM88%2FuYk5%2Bbzf05%2FReexF%2FRRhPE2dhFR954b%2Fgzhhx5p6jCn1r3FXcN3w1DMEYn%2BoRc5a90POPbBMIR8HdVeoIZvGNz8ifTMJdemRdD7Fem9A5Y8mC%2FSKx2P9ZI4d%2FoyEtVVMGlE5ol98zqWIepzlIMCJqxu7U4ChDaFt3ka&X-Amz-Signature=40adb1be7e195a71e7e9dba9cbbb7d60d1ff0c74b50db9b5939c55044c3ac7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

