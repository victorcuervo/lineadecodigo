---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4O7A2G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI3J7kj1N2%2BPyHi5QoiAlsFEjfCAtM96uokYO6P8jBJAiEA%2B3%2FE5JUlsK8BSQqMj1HIzvs5x6eKXYo%2BrDwlOwznYTUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFa3cXW3b98dXFHn6SrcA2Xe79%2FOdG46D%2FIN2p04T01BzqHbZ47vHPlDIPExLcKVQ%2Fls8vWmQTgypVbhT4vPedWI19ZeT0yrm6LnZQXT9w%2BFt1CLuCt2kNRm4IqF6rdGpezzH1P2AFpXi2FR49qxq3CNTbip1jpW7pO82a2P00Ottombl8rizv0FZwH%2Baidegx0u%2Bv%2BexG7vyP7s3mz%2BHHyCQDdjl%2BImkuShzpYbHQxwO9EfGTb09P5GM3tG%2FiZJUNFpgqxXs6tCVl2%2FtLgGLF1z%2FkblGJV62W%2FhaipfEJmu2uKhfGL%2BDGWpu0lbqV1Xa8EzsqvGaU5hardep%2FEjOvy%2Fsoe%2FjVg%2BVSSZWXelE6eWQ%2F17O8L%2B4DHWPZvxRmKNnHHdGEGtL1r9URDImBgksTCbQcF04qSTtlEcfGIt%2FsvDFlvUAYPazfGwB3nzOZCjs3cvnEfSISSN%2FBJwqT7gT3xYMOkAFwhYxXyzaSCsuiFV1TQ6ojMfBlJsxrUWb7xt4%2FIX6bElfdKHZfzhCylLOAjCEXbKco0%2BqeWlV74TtuZ8XAY5KobyAsE7IgXrOUz3LnBfRx%2BH8S9V1STbYZj02IykEIhL7vUQ%2FaqFGdfCZIzd2h39DSUu1UKDHT%2F2WBgIMFzMOM7ml%2F%2Fpoe4IMJ%2Bm0MkGOqUBe%2FaxPk09N5lNjjXq%2FM%2BncSfHk6MnwMpCHYrlI39zjYZLAuxA1IypCjC5apeD3vNpBqp784yLslDcKoD21JBilW%2B3vqq3cpzURZn4fNhizpl%2FugYQC%2BuztDACKlKjScv%2Bc8nZn6dL7kbGGCdzuvazNNtz8DiKbp7w7Qq2R5nkVGaBXiEFHLeMT7WEP4d5JMezg%2BPL38mCadAtMgrOdGEBwdhb5Pz%2F&X-Amz-Signature=f2636f94f7c6362399a1fccd6a3592a1e5befa5cce1608105721559da55dc7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4O7A2G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI3J7kj1N2%2BPyHi5QoiAlsFEjfCAtM96uokYO6P8jBJAiEA%2B3%2FE5JUlsK8BSQqMj1HIzvs5x6eKXYo%2BrDwlOwznYTUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFa3cXW3b98dXFHn6SrcA2Xe79%2FOdG46D%2FIN2p04T01BzqHbZ47vHPlDIPExLcKVQ%2Fls8vWmQTgypVbhT4vPedWI19ZeT0yrm6LnZQXT9w%2BFt1CLuCt2kNRm4IqF6rdGpezzH1P2AFpXi2FR49qxq3CNTbip1jpW7pO82a2P00Ottombl8rizv0FZwH%2Baidegx0u%2Bv%2BexG7vyP7s3mz%2BHHyCQDdjl%2BImkuShzpYbHQxwO9EfGTb09P5GM3tG%2FiZJUNFpgqxXs6tCVl2%2FtLgGLF1z%2FkblGJV62W%2FhaipfEJmu2uKhfGL%2BDGWpu0lbqV1Xa8EzsqvGaU5hardep%2FEjOvy%2Fsoe%2FjVg%2BVSSZWXelE6eWQ%2F17O8L%2B4DHWPZvxRmKNnHHdGEGtL1r9URDImBgksTCbQcF04qSTtlEcfGIt%2FsvDFlvUAYPazfGwB3nzOZCjs3cvnEfSISSN%2FBJwqT7gT3xYMOkAFwhYxXyzaSCsuiFV1TQ6ojMfBlJsxrUWb7xt4%2FIX6bElfdKHZfzhCylLOAjCEXbKco0%2BqeWlV74TtuZ8XAY5KobyAsE7IgXrOUz3LnBfRx%2BH8S9V1STbYZj02IykEIhL7vUQ%2FaqFGdfCZIzd2h39DSUu1UKDHT%2F2WBgIMFzMOM7ml%2F%2Fpoe4IMJ%2Bm0MkGOqUBe%2FaxPk09N5lNjjXq%2FM%2BncSfHk6MnwMpCHYrlI39zjYZLAuxA1IypCjC5apeD3vNpBqp784yLslDcKoD21JBilW%2B3vqq3cpzURZn4fNhizpl%2FugYQC%2BuztDACKlKjScv%2Bc8nZn6dL7kbGGCdzuvazNNtz8DiKbp7w7Qq2R5nkVGaBXiEFHLeMT7WEP4d5JMezg%2BPL38mCadAtMgrOdGEBwdhb5Pz%2F&X-Amz-Signature=8c24e90b356de2b32e3335817a26d6e3b95d7cbd4fb72599d9df36288c866f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

