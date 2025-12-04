---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVDHMFA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQClQLJuaODWzn9XeO4DgDHs0yWvKK4hiweLuD2dSkl6ZAIhALm1qMNgAJ3Qu7gn5ieV7RUZL8SqhHI%2FNt2qCWuR4I6EKv8DCD4QABoMNjM3NDIzMTgzODA1IgyF9EabBGay%2Fv1gnyMq3AMKFN7ZgIJbA%2FXnCQhWDqUuXd7qVjw%2Bs%2F8axal7PQeTIWhpW13dbDHj6f%2B1D1paLYFfz9gaDN8Z3Py3fIsIs4yoFV89BKtRzdYPMjOw%2FXB3cSwxNoa71wbwF0Zoge4HTzwojPq1EardwPa%2FQ9N8qPZgKdh30gcDllNytPOPHg8N6WVSllemft12a28xKSAf%2BhYJTij3JoSD24aEcHuC3%2BTwLbP%2BtP0k1PcSdzEa7PHyiYTCZ2ZumBLpqbszgsuRMJ9pQMRpELtzSN4edL13EEjz3LvJpHXvc%2BTiAYi%2BOYAWDlLUZbERpEC89VEl5gk9dQsp2KYSOltpFd3nadElQJOrGwSE9hyYSVv%2FLP2TZVwoEq66IDiSwrcsajpMq%2FOPGLyWqqOq1uP9bGCMUpG86gOvbYWGZMZxIv6vzTnKscupK2iuFjMe6ElvohDB9pKt1RZBpo3zvOrZNNN5R%2FAIKVwBLZ0Q9cWy1KfvAAHlzwhOp4xfFAHh18EMZkXMcKhPkjP6Kxm1AfnAsbMtPB0Gjz3Dnbb2gGIH0GMZprpozZSLRzF2ARa%2FuUDfUz4xYw1iiSRDSXiQo2w9Sds3r5EfJz%2BoERH5eR0C%2BvxFYMp1Pi7KjNeyFLYEjwzdfJWV5DDUrsTJBjqkAdQIwOFvlJDoP%2BlscRohE5MiBIOiT79PsJSK7ZBEQ5JZBHegWZxc5cSpTYbQVLjz%2FuQPdE2nBrfCKvFOAVfn%2FTMto8ktIRPI5uCtgFEE7HIbPJCKkXieMzxdGGge1Gy4QVcDzK%2BJrNXaHJjcdKqowCNWENL8zHn3rKiBPuPHt5FiW1UvJbi1QjocqnIDVma0WqwbMtlAI1GdidB4lkjkDdRFYbxm&X-Amz-Signature=9f90f64214f2b5755bfa05d0e197c6773acf0da17042c88055026bfabc07f38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVDHMFA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQClQLJuaODWzn9XeO4DgDHs0yWvKK4hiweLuD2dSkl6ZAIhALm1qMNgAJ3Qu7gn5ieV7RUZL8SqhHI%2FNt2qCWuR4I6EKv8DCD4QABoMNjM3NDIzMTgzODA1IgyF9EabBGay%2Fv1gnyMq3AMKFN7ZgIJbA%2FXnCQhWDqUuXd7qVjw%2Bs%2F8axal7PQeTIWhpW13dbDHj6f%2B1D1paLYFfz9gaDN8Z3Py3fIsIs4yoFV89BKtRzdYPMjOw%2FXB3cSwxNoa71wbwF0Zoge4HTzwojPq1EardwPa%2FQ9N8qPZgKdh30gcDllNytPOPHg8N6WVSllemft12a28xKSAf%2BhYJTij3JoSD24aEcHuC3%2BTwLbP%2BtP0k1PcSdzEa7PHyiYTCZ2ZumBLpqbszgsuRMJ9pQMRpELtzSN4edL13EEjz3LvJpHXvc%2BTiAYi%2BOYAWDlLUZbERpEC89VEl5gk9dQsp2KYSOltpFd3nadElQJOrGwSE9hyYSVv%2FLP2TZVwoEq66IDiSwrcsajpMq%2FOPGLyWqqOq1uP9bGCMUpG86gOvbYWGZMZxIv6vzTnKscupK2iuFjMe6ElvohDB9pKt1RZBpo3zvOrZNNN5R%2FAIKVwBLZ0Q9cWy1KfvAAHlzwhOp4xfFAHh18EMZkXMcKhPkjP6Kxm1AfnAsbMtPB0Gjz3Dnbb2gGIH0GMZprpozZSLRzF2ARa%2FuUDfUz4xYw1iiSRDSXiQo2w9Sds3r5EfJz%2BoERH5eR0C%2BvxFYMp1Pi7KjNeyFLYEjwzdfJWV5DDUrsTJBjqkAdQIwOFvlJDoP%2BlscRohE5MiBIOiT79PsJSK7ZBEQ5JZBHegWZxc5cSpTYbQVLjz%2FuQPdE2nBrfCKvFOAVfn%2FTMto8ktIRPI5uCtgFEE7HIbPJCKkXieMzxdGGge1Gy4QVcDzK%2BJrNXaHJjcdKqowCNWENL8zHn3rKiBPuPHt5FiW1UvJbi1QjocqnIDVma0WqwbMtlAI1GdidB4lkjkDdRFYbxm&X-Amz-Signature=1b80ef08019533d35dc6e0fd9309642a03cb66b1c0286c590905a538aa745c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

