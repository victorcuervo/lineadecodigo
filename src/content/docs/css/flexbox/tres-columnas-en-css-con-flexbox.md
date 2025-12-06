---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632O642KP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJA%2FJ4pm9uI%2BwJB9yo9QCqboWEYJW08FSDNMrqyDzhlwIgE6FEGjJHdCVd9ngZUuwv3T2nCKGP7GG%2Fmqj%2Bp%2B%2Ftr5oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLmdqaKRJMuNNKhG2CrcA%2FAgri%2FtOkgwRbgU%2FiEhkkmT6xlMcEzwUyMfpbOS3As%2Br7YNM8a2zZ8jkA0vM8ltbndfwyxxCpKcTd%2BhWDvQd74ryEr5%2BiDetLvYZcww95MEijvLsmd8N6rJqQ42cGCvTGBKBATnAfeWSv77X1nJweENcYt4QU1k9QplXxBxfIQtaCqPNHYM4CAWqlCcoGteb8dCJz9ZkiUgQuetEgRtR5yIxTld5JKccdKWJM8LbyZxm16BSFPk2KM1MYSbotx7SKhLjMZkRMP8NhTBHbZGrwMGqCXByx8dvSuHrgNAdENtnzR0ydsRfrAhY63nPMhQj9hH5DKhFbJiuwMOymP2glt0hkixrTTY677WYHlwLo1d0NitAy6Mzhepgh3lcO6g5wzOv5Hk2ouV2iDGlpLK143dem8iWXn8a3sIdJGzINlSgbu%2BOkNIdWb5t%2BeqWHbie4mAvM2qLtHUaeEOsS7QNYts%2Bh0TYLcpy%2F0ldDRShzySX3gSsbRSdZUfKwDGzEj%2BT5DY2fo3HFPzsOwp718sWi3oQBbvt5oxkDvCWgkTa3lCszqzBf%2F7ivMPEgrKcWbnQcDSA1nxP99XzMdlGh%2Ff7TF2DIgqJN58uj1V6AgyByU%2FSttMPuocZQuTYW9pMPzqz8kGOqUBL%2BPn7e4xQoGBdZfsGLDZQuri%2B5QTKIJtjCQXHU1hwIMumIg7eQwTN95YJNGecOoLc8%2B4hp4Mlzl2j5HaHMyyqvYlFWHSTiwajStTxR5modPyw647fzwu4JHqDj84EnM7oW9sUxG%2FoSc8EIi00o1tFc6DCsxbMd7skGJGEZfXQdWhUXRUzXy0zTQUJbsYhGCHdckaavP3Kr3R%2Bv1Plwl1c0Lhlzxt&X-Amz-Signature=6e209a49b2cebf211c006b9022fd637df135b3b312b4c18d4dfd73373f3e131f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632O642KP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJA%2FJ4pm9uI%2BwJB9yo9QCqboWEYJW08FSDNMrqyDzhlwIgE6FEGjJHdCVd9ngZUuwv3T2nCKGP7GG%2Fmqj%2Bp%2B%2Ftr5oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLmdqaKRJMuNNKhG2CrcA%2FAgri%2FtOkgwRbgU%2FiEhkkmT6xlMcEzwUyMfpbOS3As%2Br7YNM8a2zZ8jkA0vM8ltbndfwyxxCpKcTd%2BhWDvQd74ryEr5%2BiDetLvYZcww95MEijvLsmd8N6rJqQ42cGCvTGBKBATnAfeWSv77X1nJweENcYt4QU1k9QplXxBxfIQtaCqPNHYM4CAWqlCcoGteb8dCJz9ZkiUgQuetEgRtR5yIxTld5JKccdKWJM8LbyZxm16BSFPk2KM1MYSbotx7SKhLjMZkRMP8NhTBHbZGrwMGqCXByx8dvSuHrgNAdENtnzR0ydsRfrAhY63nPMhQj9hH5DKhFbJiuwMOymP2glt0hkixrTTY677WYHlwLo1d0NitAy6Mzhepgh3lcO6g5wzOv5Hk2ouV2iDGlpLK143dem8iWXn8a3sIdJGzINlSgbu%2BOkNIdWb5t%2BeqWHbie4mAvM2qLtHUaeEOsS7QNYts%2Bh0TYLcpy%2F0ldDRShzySX3gSsbRSdZUfKwDGzEj%2BT5DY2fo3HFPzsOwp718sWi3oQBbvt5oxkDvCWgkTa3lCszqzBf%2F7ivMPEgrKcWbnQcDSA1nxP99XzMdlGh%2Ff7TF2DIgqJN58uj1V6AgyByU%2FSttMPuocZQuTYW9pMPzqz8kGOqUBL%2BPn7e4xQoGBdZfsGLDZQuri%2B5QTKIJtjCQXHU1hwIMumIg7eQwTN95YJNGecOoLc8%2B4hp4Mlzl2j5HaHMyyqvYlFWHSTiwajStTxR5modPyw647fzwu4JHqDj84EnM7oW9sUxG%2FoSc8EIi00o1tFc6DCsxbMd7skGJGEZfXQdWhUXRUzXy0zTQUJbsYhGCHdckaavP3Kr3R%2Bv1Plwl1c0Lhlzxt&X-Amz-Signature=56f55f84bc8bc3841f118635003ca85c0d7504b7279bdef05b09e796a37f7418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

