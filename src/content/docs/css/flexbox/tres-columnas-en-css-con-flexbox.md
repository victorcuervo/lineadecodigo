---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLGAOUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs6zp46RWfgbVMnOrk7qLIqdDs13JZtFXJql8vTqbQDAIgAO49vPnna50iOSipglJhAQJ3EiC1Ed2nVknyYt6UXXgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCZKCGVrwcvNBwTDSrcA7vZgthOzYbA4%2F7Mun94ZscqqS6Y2rpoKL9QWrq7Z4HMQaQiT2WQWmHY7M9NDw49fbuEcuej41kve%2ByRkkMJwXFqzMPLFX%2FlmLzhCVqrsNHYXjSdaa9iqezhKY%2FeaFE3eGg9sDLxRuaguTQOK9kBaVc9w8aOkLAVmgSI3o%2FlkSia3GRn0IBIgRnv1WbSXnKnOu7iZdXVtl5DeRno6I%2FqM%2FAxMQu%2FU7d7OD8XPQvgJI8NdqK1gtscmf7E7KXo5thBsenbiq%2BcE%2B4xxKG4I9ykVUOyjCZyOhWG3RFmL6w%2BqBQ1ongYQWwfQ1QcNqzjpmHDb2GVUjrbNStPIk0YR3aTfHLE1DaiVsfPyOvalI03mcrofneLzaQ8QIsIxjOvvEJBOgzd%2F3tcCy2CC3xZZ6mU%2F003lvjCkjRkVmEqNdPKkVEHJyhI2ioS92Jd%2FVptmgu2dkp9Oqt%2BxDX4JeSQVJ7%2B6kRIiQ82R3UP6XY%2F%2Bqm7voPeDSx0MiDPedK%2Bqcxjo%2Fv3nUxjLRRsqQ8TjFqDVHBIyTp2x6%2BV95MsgIlqpEPoWoZbOPHOyPpepi09yzfmOcQeixNUxHkKrCMptl7M%2BEWRmc%2B1CzgKMOLAVwjcrneuGIIlTj3jMs7WrsKE7pXOMLy%2B1skGOqUBUun7AzO%2FnFOigl24OO6ZozJnWoQlM355m8kKUVUP5NPt9FacQB0W4lUJLzp6yNHDKgYa5Dib1UaF2PUrlZoaglykE07qJ4AYc0xrtu1kp0wFPe%2B8pJU9E4natsz7oUBNAOZSbdWlQwZCNJ3LTwncAtx%2Fhm%2FnVCeBtH3JepvyU4aejnBRgg0cqhkYJl5doijoMsQIjNLBgE4sPTEF7jT5oDGFAWCk&X-Amz-Signature=6f1742fc5f7c76c6fd62501460093fc3b56d6e9783a496430197e33c1a4516b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLGAOUF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs6zp46RWfgbVMnOrk7qLIqdDs13JZtFXJql8vTqbQDAIgAO49vPnna50iOSipglJhAQJ3EiC1Ed2nVknyYt6UXXgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCZKCGVrwcvNBwTDSrcA7vZgthOzYbA4%2F7Mun94ZscqqS6Y2rpoKL9QWrq7Z4HMQaQiT2WQWmHY7M9NDw49fbuEcuej41kve%2ByRkkMJwXFqzMPLFX%2FlmLzhCVqrsNHYXjSdaa9iqezhKY%2FeaFE3eGg9sDLxRuaguTQOK9kBaVc9w8aOkLAVmgSI3o%2FlkSia3GRn0IBIgRnv1WbSXnKnOu7iZdXVtl5DeRno6I%2FqM%2FAxMQu%2FU7d7OD8XPQvgJI8NdqK1gtscmf7E7KXo5thBsenbiq%2BcE%2B4xxKG4I9ykVUOyjCZyOhWG3RFmL6w%2BqBQ1ongYQWwfQ1QcNqzjpmHDb2GVUjrbNStPIk0YR3aTfHLE1DaiVsfPyOvalI03mcrofneLzaQ8QIsIxjOvvEJBOgzd%2F3tcCy2CC3xZZ6mU%2F003lvjCkjRkVmEqNdPKkVEHJyhI2ioS92Jd%2FVptmgu2dkp9Oqt%2BxDX4JeSQVJ7%2B6kRIiQ82R3UP6XY%2F%2Bqm7voPeDSx0MiDPedK%2Bqcxjo%2Fv3nUxjLRRsqQ8TjFqDVHBIyTp2x6%2BV95MsgIlqpEPoWoZbOPHOyPpepi09yzfmOcQeixNUxHkKrCMptl7M%2BEWRmc%2B1CzgKMOLAVwjcrneuGIIlTj3jMs7WrsKE7pXOMLy%2B1skGOqUBUun7AzO%2FnFOigl24OO6ZozJnWoQlM355m8kKUVUP5NPt9FacQB0W4lUJLzp6yNHDKgYa5Dib1UaF2PUrlZoaglykE07qJ4AYc0xrtu1kp0wFPe%2B8pJU9E4natsz7oUBNAOZSbdWlQwZCNJ3LTwncAtx%2Fhm%2FnVCeBtH3JepvyU4aejnBRgg0cqhkYJl5doijoMsQIjNLBgE4sPTEF7jT5oDGFAWCk&X-Amz-Signature=58915d88a7bcda89e2d87abf30d1a442a892c1ab7745b496e8e88ff6efe7ee5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

