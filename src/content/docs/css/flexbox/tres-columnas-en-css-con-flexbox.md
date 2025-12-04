---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYRHECE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFA7muu6pQmYJkyrsBM0oY4r6TdjS3A7NWpjDIJeDK9JAiA%2BYvuqwgcemEKiNvYgbidocFGwo5BoQ7trDE8JRt0a2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvvg6hiI0hzrkO%2FW6KtwDB7BJkPB%2Fcong6uZWbTBM638N4mrc4vOMMB3uodpVi%2BCxla5FYEbc%2FNkCR1G2wTS15b6RyrputhmGMvaXdaUKbpppKIaDmwZVWGk05NNbiqfM0YbyrcP7vrtNnC%2BeSO7dLzxDdtXdHnWF8BnyMuAHHeNoS5PtzkFh6uGjVCpZJNRcyTk34NYmDO7L%2B8HMSboCXE6sc2TqMcVoj9TrvYtJfYJolZNeiSEWChMmYCWB%2F3GZvgHlNQ7ryN30VD4eljAn05D9ffi7Zx7RBVyt44VBuCcjyH1PVZmj5DnUJ4THae8t3D6qDVEzgt8nCub%2FqqEtxbF9XOLRScOU9ecJzhDxRbm4tSlUeEI4u0CN7prAEUukYCZoeWwVejZ6CVsEDcKgBGSa9tvRx%2BiO889otKmJRUpoHIwGc9CVsvIZaNPn1EMJx%2BwfOM9DZ6ONTllA1c%2Bljg2ETlzpMRpP9yb8MFovJ9DZu%2BJFI%2BqUnCFDxxc6Hcgqeu%2BPVaKsK2ASh1gMxJ6cyMQjAkcOs9Z8zg%2BzpIWY9J%2FnOl9iJ53dF8MpXLlD5YXkUuI3EGsEB0hOi%2BBKY0J2StbQTZ3XCazyxnGdDbZT4buQrsyp%2BaCsOzXXPPuqpHxCOjind5lUFFYqGpAwiYbFyQY6pgEneNqYR1CPrGLJQCYt5ElGsIC04Y0L8oLks6EJ11fGeEZRW0DX9XdoY9eOjIBp6ioCeA67%2BMceuvHojKCBJ%2F6qV68u7JVvCFJtxclTCAUykXsz1XJ6WFM6TlhDc5kxf3MZIMby0XeU8joL0kuCodKCEkpuLb5qnRN9Jg5ytDK2NBDkFWn9ET5NDogdxFJeTpDY6j6BU3ilE5PztF3eqnV71LZbuqtj&X-Amz-Signature=c7fb2ef2e41213ee282265b2785de60552a928132fa416fd59bb7accb5079a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYRHECE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFA7muu6pQmYJkyrsBM0oY4r6TdjS3A7NWpjDIJeDK9JAiA%2BYvuqwgcemEKiNvYgbidocFGwo5BoQ7trDE8JRt0a2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvvg6hiI0hzrkO%2FW6KtwDB7BJkPB%2Fcong6uZWbTBM638N4mrc4vOMMB3uodpVi%2BCxla5FYEbc%2FNkCR1G2wTS15b6RyrputhmGMvaXdaUKbpppKIaDmwZVWGk05NNbiqfM0YbyrcP7vrtNnC%2BeSO7dLzxDdtXdHnWF8BnyMuAHHeNoS5PtzkFh6uGjVCpZJNRcyTk34NYmDO7L%2B8HMSboCXE6sc2TqMcVoj9TrvYtJfYJolZNeiSEWChMmYCWB%2F3GZvgHlNQ7ryN30VD4eljAn05D9ffi7Zx7RBVyt44VBuCcjyH1PVZmj5DnUJ4THae8t3D6qDVEzgt8nCub%2FqqEtxbF9XOLRScOU9ecJzhDxRbm4tSlUeEI4u0CN7prAEUukYCZoeWwVejZ6CVsEDcKgBGSa9tvRx%2BiO889otKmJRUpoHIwGc9CVsvIZaNPn1EMJx%2BwfOM9DZ6ONTllA1c%2Bljg2ETlzpMRpP9yb8MFovJ9DZu%2BJFI%2BqUnCFDxxc6Hcgqeu%2BPVaKsK2ASh1gMxJ6cyMQjAkcOs9Z8zg%2BzpIWY9J%2FnOl9iJ53dF8MpXLlD5YXkUuI3EGsEB0hOi%2BBKY0J2StbQTZ3XCazyxnGdDbZT4buQrsyp%2BaCsOzXXPPuqpHxCOjind5lUFFYqGpAwiYbFyQY6pgEneNqYR1CPrGLJQCYt5ElGsIC04Y0L8oLks6EJ11fGeEZRW0DX9XdoY9eOjIBp6ioCeA67%2BMceuvHojKCBJ%2F6qV68u7JVvCFJtxclTCAUykXsz1XJ6WFM6TlhDc5kxf3MZIMby0XeU8joL0kuCodKCEkpuLb5qnRN9Jg5ytDK2NBDkFWn9ET5NDogdxFJeTpDY6j6BU3ilE5PztF3eqnV71LZbuqtj&X-Amz-Signature=e057b3bda2522e84c5138f990cc6b5a4dd0189d0b9af100553daa0caa2e56dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

