---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVJROXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB07rL5tmscDfCo8AGZcrK7QMVh2l22YBzurP%2BNPwnWgIhAO0A6Vmd0oo4ROWQA7UyBQRB5AJz4RRUAEqKsKCEgBEjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmhuYvyqwnmQz99Y8q3AO7RC4rqx1n2ZHirGKZBAYE%2FoQqo%2FtMewlMa94czP3aZj5N1Y3os%2FQqP59jmng1mfX28cBXKxikd3iaRdMHvJUBi5VZdt8kQYIVR2S%2FgqJAzrw1klyP%2B2pFo2xAagHmYCLKE8mpqUtBlKioAIHGeFMoKQoPylmANOT15A6GqQ9r42Rycp%2FuWqwrvn%2F6yW%2Fw69XrjSdkYO0ypc7POi36%2BYmL%2B26F15wAYBZaWFP%2FBahkzz1hg5H5FxpUvkbZHkvwhfg%2Ffm4s4Ddx2Y3ccRkSgv8PFKOugg7xduAGSmuvxEqCGGDofUge0R0xQzwn%2Bt6UVK9v0Ip8vtomVfphMFQSwaEO1tIW5eA%2F0W9tF2UTxE0gkOY15IUW5Q6tGpMtymLLfud7opAW%2B2%2BSK4bCRupmYmvdstoD4ismgbMtR6GiVIYZiy7%2B1FEO4Cenu8XBIzC2a3n0OiH6C8Ep4OpkmwWSOGD1hFZfC5QUFmZiMlPMwprhGiXcMsDM1%2F9o9kxkOOsPCa1mEm2sh6oG9QI7GEBakjWjUXlpyc%2ByNUzf8h7W7%2B6LTZGw4bOpdtTd0Y2M%2BfAD0ccwTKS614N3S88QV87jfr%2F7a0xaHf%2F16PbEbTIn4xv4iF36mC0%2FowvldgL4eDCwmtXJBjqkAdzzh5qnB0AvgngW%2B6SSpmVcIpG1L1NrVMO7SivLm0iZidrknSu58lXPEmGizVLUVsLWqA3RBIGawHgBJNkwN7%2FmapZj8sZC0O%2B94bTmmHHWjoaS8qwp3qdXNc5pBD1nVBSsj7uS%2FCTrtX6TQTEwXkc49QfUYmJPucTvMXuSrDzVAY%2B60HCyK%2B73GMavAsD2%2F%2F%2Bmx1w5uGSyoOKg7y5k%2B2Q9eH1C&X-Amz-Signature=7e1a813c974a648c18f0d298d1067d82fe3ae92e4c22cb0bdab63a176b5d4234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVJROXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB07rL5tmscDfCo8AGZcrK7QMVh2l22YBzurP%2BNPwnWgIhAO0A6Vmd0oo4ROWQA7UyBQRB5AJz4RRUAEqKsKCEgBEjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmhuYvyqwnmQz99Y8q3AO7RC4rqx1n2ZHirGKZBAYE%2FoQqo%2FtMewlMa94czP3aZj5N1Y3os%2FQqP59jmng1mfX28cBXKxikd3iaRdMHvJUBi5VZdt8kQYIVR2S%2FgqJAzrw1klyP%2B2pFo2xAagHmYCLKE8mpqUtBlKioAIHGeFMoKQoPylmANOT15A6GqQ9r42Rycp%2FuWqwrvn%2F6yW%2Fw69XrjSdkYO0ypc7POi36%2BYmL%2B26F15wAYBZaWFP%2FBahkzz1hg5H5FxpUvkbZHkvwhfg%2Ffm4s4Ddx2Y3ccRkSgv8PFKOugg7xduAGSmuvxEqCGGDofUge0R0xQzwn%2Bt6UVK9v0Ip8vtomVfphMFQSwaEO1tIW5eA%2F0W9tF2UTxE0gkOY15IUW5Q6tGpMtymLLfud7opAW%2B2%2BSK4bCRupmYmvdstoD4ismgbMtR6GiVIYZiy7%2B1FEO4Cenu8XBIzC2a3n0OiH6C8Ep4OpkmwWSOGD1hFZfC5QUFmZiMlPMwprhGiXcMsDM1%2F9o9kxkOOsPCa1mEm2sh6oG9QI7GEBakjWjUXlpyc%2ByNUzf8h7W7%2B6LTZGw4bOpdtTd0Y2M%2BfAD0ccwTKS614N3S88QV87jfr%2F7a0xaHf%2F16PbEbTIn4xv4iF36mC0%2FowvldgL4eDCwmtXJBjqkAdzzh5qnB0AvgngW%2B6SSpmVcIpG1L1NrVMO7SivLm0iZidrknSu58lXPEmGizVLUVsLWqA3RBIGawHgBJNkwN7%2FmapZj8sZC0O%2B94bTmmHHWjoaS8qwp3qdXNc5pBD1nVBSsj7uS%2FCTrtX6TQTEwXkc49QfUYmJPucTvMXuSrDzVAY%2B60HCyK%2B73GMavAsD2%2F%2F%2Bmx1w5uGSyoOKg7y5k%2B2Q9eH1C&X-Amz-Signature=3210e3e11f72ea3546c2f25310c8fc552bc9e7525d36ae45316de7aad0bec33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

