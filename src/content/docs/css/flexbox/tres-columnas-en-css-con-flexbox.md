---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVICZIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOp7kX1kB%2Bwb%2B4Mzx7jpYnaeDUwVETJzlLCbmWlxJGYAiEAz7uXhHnfsLxajU57MFfyFDsMA3s93qRcnJB2I4bSHq4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRSSfmE%2FX%2FQFYTwtSrcA5jpwvX5K8YRnQV3c5DWC8PsEs%2BZjLG6RM7n%2FojwzWJyej8WVuE2Ry5agcasuiVXbUUYzm7Z37ces72alvrKCJe37BYPlpbq3TZqKligavtvKNhs1XrwT%2BJC3C0bIa4E2MbPVhsyQumNpL%2B8vB1BXCckahFPr1aoNBjz27bXU2qMQKAHkjKQR055nnmciJA77gy5XqHRHbbGJiUTYejE5mIoWBeCrcVj2hl5wJtZgWkh9PJwpdZVwwtkLL%2B3AUWn5PC73Ago%2FuEY4%2BOyXua9h%2FOC%2FFTM9CGuwQBXWSvrQCA35vNKWD1PIs1PMvaKgYwC9RZJy45YuSP99DgVyR8e6TgTpWdHcOQEb50j8BBFnRD37y%2FEjH3EOUDlgr9x9hh8stMf2msZCSd%2Bu%2FL58S2iAfj5D00sS7t5kUj%2B8F46lssViFEXamVcNEQ8k%2BlqW5vU5DyGCJN%2BA1c1TwOpDwq9a%2FgSTKsIWQOiYvanV8bj%2BywvsmyxiNPqoAbI2uqxFDqmVGrjfu0ySI78xiBX65hZh3lvw0CHySqNzywihX0Cq3EBbXCVtSMvoH20LI87z2qp9aK4g4%2Fx0DfCQFrjMerncKIFHoGvKwvW2mgqkum39lvJXxyP26nDBJUr%2BpdhMK3L0ckGOqUBta5TfSprqk3YL6N5vXgjepc62gfuo4npxQ3lMxhSZpoTaT07NJhdKTTdul%2BGtHnRXLeKxkUUDU2ZXo%2B3BO7c5YZfWxZjJoPokmC06pWXdi%2FC3OcmJ%2FfbmmTo0CZAXpgS0pKic2FaJ7%2FvC5hPvMd6LLyJ2RGVipRM1mduGn3fLT%2B2Nj%2BPOvlKyG5yiTEAEexogx2WmJcllpQEb0vsoUKFZF7szp6s&X-Amz-Signature=f72602169783397e04afc7747c5040b36417417e119d24681988c7064b9dea6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVICZIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOp7kX1kB%2Bwb%2B4Mzx7jpYnaeDUwVETJzlLCbmWlxJGYAiEAz7uXhHnfsLxajU57MFfyFDsMA3s93qRcnJB2I4bSHq4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRSSfmE%2FX%2FQFYTwtSrcA5jpwvX5K8YRnQV3c5DWC8PsEs%2BZjLG6RM7n%2FojwzWJyej8WVuE2Ry5agcasuiVXbUUYzm7Z37ces72alvrKCJe37BYPlpbq3TZqKligavtvKNhs1XrwT%2BJC3C0bIa4E2MbPVhsyQumNpL%2B8vB1BXCckahFPr1aoNBjz27bXU2qMQKAHkjKQR055nnmciJA77gy5XqHRHbbGJiUTYejE5mIoWBeCrcVj2hl5wJtZgWkh9PJwpdZVwwtkLL%2B3AUWn5PC73Ago%2FuEY4%2BOyXua9h%2FOC%2FFTM9CGuwQBXWSvrQCA35vNKWD1PIs1PMvaKgYwC9RZJy45YuSP99DgVyR8e6TgTpWdHcOQEb50j8BBFnRD37y%2FEjH3EOUDlgr9x9hh8stMf2msZCSd%2Bu%2FL58S2iAfj5D00sS7t5kUj%2B8F46lssViFEXamVcNEQ8k%2BlqW5vU5DyGCJN%2BA1c1TwOpDwq9a%2FgSTKsIWQOiYvanV8bj%2BywvsmyxiNPqoAbI2uqxFDqmVGrjfu0ySI78xiBX65hZh3lvw0CHySqNzywihX0Cq3EBbXCVtSMvoH20LI87z2qp9aK4g4%2Fx0DfCQFrjMerncKIFHoGvKwvW2mgqkum39lvJXxyP26nDBJUr%2BpdhMK3L0ckGOqUBta5TfSprqk3YL6N5vXgjepc62gfuo4npxQ3lMxhSZpoTaT07NJhdKTTdul%2BGtHnRXLeKxkUUDU2ZXo%2B3BO7c5YZfWxZjJoPokmC06pWXdi%2FC3OcmJ%2FfbmmTo0CZAXpgS0pKic2FaJ7%2FvC5hPvMd6LLyJ2RGVipRM1mduGn3fLT%2B2Nj%2BPOvlKyG5yiTEAEexogx2WmJcllpQEb0vsoUKFZF7szp6s&X-Amz-Signature=dd7c8e4dffc3aae73b02d20ff1ac0828fc163326755d2b3fb52c9d6efed77d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

