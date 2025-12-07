---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WKQBKHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Uym3E8M7MPMudUxhgnPMrmuK9WgOark5T7vVOune8gIhANirfAOHjhsp5q2%2FGTnpYBtpnrHsOzFXzPbcMfP2EI0cKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwuwv0rJC2pmBdasaoq3AMoki%2FFzCP7VhHbnZJedhzONQp4TLi8ng6K69TKx23ds4VyLLLHrBgNm9iW8BHoXF%2F85pq9k%2FgnjzP82jc5CnlmZxEfj3nzySJjOn8fgbvMXp7air8AJkD26juZe25kAYapD7%2B%2FhIBGP%2FwDWHc%2BgCX%2BE7vGYWKi9hOMvJqv2oCulRSeDmZ94paG63bvlicuENLlVg1dpnLi97Xxj1oH5Kj4lXCil2DiNQHAaNNhM5Q5IYuoi3g40Gu%2BDrWiyduDE%2Ban%2FQOjNBLAwTausJ5FRXZb8aHTwu6iu6qxGNsY5gY%2B4BwvZNkem5S9L3TsUVWbtKJQU0bTqR9rK1WqldHGNQCjbbGWBYZhwkfq5i%2BzIdYaYCFfKilCMfvidIqPVmdL8C3V5tpp8XXoCdzdjNw36qtU9MFbGRcscoDoe3gNE1kjx8jtJYTE1WrZv8JkU6EZxah4akH%2F41F7VBie7eHdvlTfBRPN4mSZkNugTXEN39SwEeCqHps0w4pH4onJgsq0hpRZ8X%2BXh39PMILbaFN1hIxyylK6VnUUgbzRB9mRImbUvKZWxcy2eAxT97tmnsSDfrhOSJdHf3adIofUt7%2FMd18O5Joghr92h6zKzOT0BV%2BaC8UR5gBDTejh0t0aEDDLs9bJBjqkASsnh2VJ0VZcR59adUr7PJ1WjLcemSKC0mjcVVRD4r0CH6jd80KXh%2FbdlrJGGHv5CjFKabcyyt7xdUYACmjGbzlAFyIxIf6ofeUO38MYpHjqKOiJN0hpLMxjK8CspeE85ncmVY4mwmzeFif8%2B8jHz9PLuUSFZK0f7%2BY4J81ExhsjJ7fAHfe2W%2Fx1gYHoVXrrKW2ML5VRhCscyPCh5bRQSe1OYBQf&X-Amz-Signature=dfe1ecbadf59489fa052fdf381f2f2c2fb3a8367ade4b00f6806c1d6e593c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WKQBKHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Uym3E8M7MPMudUxhgnPMrmuK9WgOark5T7vVOune8gIhANirfAOHjhsp5q2%2FGTnpYBtpnrHsOzFXzPbcMfP2EI0cKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwuwv0rJC2pmBdasaoq3AMoki%2FFzCP7VhHbnZJedhzONQp4TLi8ng6K69TKx23ds4VyLLLHrBgNm9iW8BHoXF%2F85pq9k%2FgnjzP82jc5CnlmZxEfj3nzySJjOn8fgbvMXp7air8AJkD26juZe25kAYapD7%2B%2FhIBGP%2FwDWHc%2BgCX%2BE7vGYWKi9hOMvJqv2oCulRSeDmZ94paG63bvlicuENLlVg1dpnLi97Xxj1oH5Kj4lXCil2DiNQHAaNNhM5Q5IYuoi3g40Gu%2BDrWiyduDE%2Ban%2FQOjNBLAwTausJ5FRXZb8aHTwu6iu6qxGNsY5gY%2B4BwvZNkem5S9L3TsUVWbtKJQU0bTqR9rK1WqldHGNQCjbbGWBYZhwkfq5i%2BzIdYaYCFfKilCMfvidIqPVmdL8C3V5tpp8XXoCdzdjNw36qtU9MFbGRcscoDoe3gNE1kjx8jtJYTE1WrZv8JkU6EZxah4akH%2F41F7VBie7eHdvlTfBRPN4mSZkNugTXEN39SwEeCqHps0w4pH4onJgsq0hpRZ8X%2BXh39PMILbaFN1hIxyylK6VnUUgbzRB9mRImbUvKZWxcy2eAxT97tmnsSDfrhOSJdHf3adIofUt7%2FMd18O5Joghr92h6zKzOT0BV%2BaC8UR5gBDTejh0t0aEDDLs9bJBjqkASsnh2VJ0VZcR59adUr7PJ1WjLcemSKC0mjcVVRD4r0CH6jd80KXh%2FbdlrJGGHv5CjFKabcyyt7xdUYACmjGbzlAFyIxIf6ofeUO38MYpHjqKOiJN0hpLMxjK8CspeE85ncmVY4mwmzeFif8%2B8jHz9PLuUSFZK0f7%2BY4J81ExhsjJ7fAHfe2W%2Fx1gYHoVXrrKW2ML5VRhCscyPCh5bRQSe1OYBQf&X-Amz-Signature=124290212c42e3535d9ba9823d963151923d4da6bfc715d27bc0a2414c31cafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

