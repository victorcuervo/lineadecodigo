---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCY6N3HC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9ZGtOjslNRbJwFoYtzvDWkiTE3dJM%2BM2Cs0U5MyiIAIhANPoONEry2LcGXcjNa5lormduhkVqbUXLeMGXEJ%2B4kvGKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw76ZOAFjY3PXEKEkoq3AMK%2FBtHFD%2FQLWgBFqxosr9D9%2B%2BVzYh78%2BuxSy18PCVP1%2BsEiTACygpF%2BGTUvSPSTwB%2F7WG9kLtlINPTQ1jJQOInsVZrNinAlDN38B%2F9e6koljyqdHpSm%2FccNnTqAKz8PARmIHR4P%2F7eBWUPrGYFSYSaSwTX%2BJSgToWtZWBjpTM%2BxUghhlYqDq3FsZLNCSyYlAXZ2xJgzb2D8AGnH8W2J2w%2FW%2B9b8XUpz7%2BC8c8RNzvceLZTMjujsGV%2B7QkgSd%2Fw4Q77o2KvbA6Svnk%2BQW%2BXHvdrYMQ4aikV%2FyJJ7OK7m0JtIZ3Kvv0ur8IUbl47QcIdOR78iJ0nZGzWjrMtileIFybZ2ecBf5UTBbYucUWL8LPMyBBHJT6oc%2FPmZdZzSRlLHYwDum7hX3OfT0B5Fat0O4PYrsYra32ZN72V14MJdfFdmhEp3gBZAvASDT%2BG8ER63p1kilO1T10FXXC7%2Fih%2BM8lvp1%2F%2FE1%2BQyBBAw5UPIMDV%2FyXomf6kj1ArYItwleirSIKsE85CgW1QrIGxgiQOMr1wUX6ve3eDrnMp7CLNdlLv0nh0rXZjLYXXO3e0l2EGaKlJGnb4qH%2BwrAHoYP9BAUQ4ivCKSpmrYmiYEo61Bq6GY4dZclXeXyiacXfaEjDQnNTJBjqkAfltSfySvjlfDtHTUPlJik1Do7gF4HWl4E%2FIxYP7GT8xlHFAncDwZ6bQ1jev19kHfyhrCU6qxrBo9iN3ftJGaSNku6cRiVodDTZl5lbXEK0dp0F1TNj2yOGGCNmBVpmZ4dMhPbsb9hsRGPoqit90rAQTdidQgepdeZ31uQSrZSWGfKb7zNO6xkcHYXLwer0T1wrY3t4aLn2sRWb%2BaH03IgH5%2BOXl&X-Amz-Signature=721328101660d3c45adf7add36247117ff250be64d3f379dbb0081ebd1a8e812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCY6N3HC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9ZGtOjslNRbJwFoYtzvDWkiTE3dJM%2BM2Cs0U5MyiIAIhANPoONEry2LcGXcjNa5lormduhkVqbUXLeMGXEJ%2B4kvGKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw76ZOAFjY3PXEKEkoq3AMK%2FBtHFD%2FQLWgBFqxosr9D9%2B%2BVzYh78%2BuxSy18PCVP1%2BsEiTACygpF%2BGTUvSPSTwB%2F7WG9kLtlINPTQ1jJQOInsVZrNinAlDN38B%2F9e6koljyqdHpSm%2FccNnTqAKz8PARmIHR4P%2F7eBWUPrGYFSYSaSwTX%2BJSgToWtZWBjpTM%2BxUghhlYqDq3FsZLNCSyYlAXZ2xJgzb2D8AGnH8W2J2w%2FW%2B9b8XUpz7%2BC8c8RNzvceLZTMjujsGV%2B7QkgSd%2Fw4Q77o2KvbA6Svnk%2BQW%2BXHvdrYMQ4aikV%2FyJJ7OK7m0JtIZ3Kvv0ur8IUbl47QcIdOR78iJ0nZGzWjrMtileIFybZ2ecBf5UTBbYucUWL8LPMyBBHJT6oc%2FPmZdZzSRlLHYwDum7hX3OfT0B5Fat0O4PYrsYra32ZN72V14MJdfFdmhEp3gBZAvASDT%2BG8ER63p1kilO1T10FXXC7%2Fih%2BM8lvp1%2F%2FE1%2BQyBBAw5UPIMDV%2FyXomf6kj1ArYItwleirSIKsE85CgW1QrIGxgiQOMr1wUX6ve3eDrnMp7CLNdlLv0nh0rXZjLYXXO3e0l2EGaKlJGnb4qH%2BwrAHoYP9BAUQ4ivCKSpmrYmiYEo61Bq6GY4dZclXeXyiacXfaEjDQnNTJBjqkAfltSfySvjlfDtHTUPlJik1Do7gF4HWl4E%2FIxYP7GT8xlHFAncDwZ6bQ1jev19kHfyhrCU6qxrBo9iN3ftJGaSNku6cRiVodDTZl5lbXEK0dp0F1TNj2yOGGCNmBVpmZ4dMhPbsb9hsRGPoqit90rAQTdidQgepdeZ31uQSrZSWGfKb7zNO6xkcHYXLwer0T1wrY3t4aLn2sRWb%2BaH03IgH5%2BOXl&X-Amz-Signature=a8a82c0a10100bd10a4c407f3744374c3d0ddac380f8ebeb3986a0b18866a77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

