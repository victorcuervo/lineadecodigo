---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW664MAA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmCufRkwAlffJp2bEnr7BOrh85YGAoAPkDdz3HEMZX2AIgTQuCS8QG%2Bh2q31Y35IaMrm3iHK8thcivCHRwRLOioTcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2zLn4q32dbRY6hQCrcAyX33qzz%2Bbw7W3Jroym55vffnwP8vvmrZa%2Bg2Zvna15QD3146rT99luDUwFv8k7mOYXgRrSPLp3%2BPbG5Df5p%2FTuYmUvdAgpzEhAGptILGhEva1M1Ud8itZDxpTB9q6SWbWcYqWlt6c50Dv1OrPb4TklJ1t8J9sBZOtPwTkdT0JBxrPN25Q8cEUbsRmCAMqf0KRjf2BRHTA9xehLiusafJlRs8aGbrHMR11pgPYiTCaFklYw2%2BjW6qH0iNePlCkULQzUePapk8e5sJN7jwlcSfCGsVqw8wE7yWj99ZVjsnGFJp3cXYRHwMSGieNRoLZhpqsbEQJZq7ZAwXz75UMYlDWJA%2B50LqbKyvVJVBqwBODMxhftID%2BGE8wofiSiqgjOuCw8SGHOoDruz09wKM5uGlqmEPDk4zW%2B4usztDtI3JyI8G0ARETpYriBS2XM1zkA5e92bbuoxzhnJknwfbKFQz64nMRG7czwJ%2FeZoBPyv%2Fu87JZPDNDvyDG1eb3VO7Z7ERBYKcjDvUuLgHawurPUwrc4ZlCNh%2BcUa9vVkyCMLRAoWabVb5%2FBA3dUps2OHI0j8hC605BNgqnl9q6Yam9WHdeIEZR8q3zi%2B%2F0V8E8zPLYuw4CrwWbXbnWMdo3yqMJOH38kGOqUBR9%2F%2FnhRSd%2BpUjHkPqU4M%2BCv55kg%2Bd6N2pJEbZfXiTuqA%2FRbFBhXFQuVidISSscp6brCTs74cIZ8jCDBUfS2ZXk6AVzEU1cPukhGme3DSRUrAJtekr6HEy5xDiBKHGzT73RRbDShpo7AOh2EpRNvbK9rSQlwITjrs7BfOLe5PolAR4Yf%2F6i5MEk%2FpPj99EC6smHfeH%2BG6oWYtY3oXMdrFKDjqL8aw&X-Amz-Signature=4d4bdf7410a51435cb2ab1d2aacb9cfd42fce6106f17f62745aada727025229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW664MAA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmCufRkwAlffJp2bEnr7BOrh85YGAoAPkDdz3HEMZX2AIgTQuCS8QG%2Bh2q31Y35IaMrm3iHK8thcivCHRwRLOioTcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2zLn4q32dbRY6hQCrcAyX33qzz%2Bbw7W3Jroym55vffnwP8vvmrZa%2Bg2Zvna15QD3146rT99luDUwFv8k7mOYXgRrSPLp3%2BPbG5Df5p%2FTuYmUvdAgpzEhAGptILGhEva1M1Ud8itZDxpTB9q6SWbWcYqWlt6c50Dv1OrPb4TklJ1t8J9sBZOtPwTkdT0JBxrPN25Q8cEUbsRmCAMqf0KRjf2BRHTA9xehLiusafJlRs8aGbrHMR11pgPYiTCaFklYw2%2BjW6qH0iNePlCkULQzUePapk8e5sJN7jwlcSfCGsVqw8wE7yWj99ZVjsnGFJp3cXYRHwMSGieNRoLZhpqsbEQJZq7ZAwXz75UMYlDWJA%2B50LqbKyvVJVBqwBODMxhftID%2BGE8wofiSiqgjOuCw8SGHOoDruz09wKM5uGlqmEPDk4zW%2B4usztDtI3JyI8G0ARETpYriBS2XM1zkA5e92bbuoxzhnJknwfbKFQz64nMRG7czwJ%2FeZoBPyv%2Fu87JZPDNDvyDG1eb3VO7Z7ERBYKcjDvUuLgHawurPUwrc4ZlCNh%2BcUa9vVkyCMLRAoWabVb5%2FBA3dUps2OHI0j8hC605BNgqnl9q6Yam9WHdeIEZR8q3zi%2B%2F0V8E8zPLYuw4CrwWbXbnWMdo3yqMJOH38kGOqUBR9%2F%2FnhRSd%2BpUjHkPqU4M%2BCv55kg%2Bd6N2pJEbZfXiTuqA%2FRbFBhXFQuVidISSscp6brCTs74cIZ8jCDBUfS2ZXk6AVzEU1cPukhGme3DSRUrAJtekr6HEy5xDiBKHGzT73RRbDShpo7AOh2EpRNvbK9rSQlwITjrs7BfOLe5PolAR4Yf%2F6i5MEk%2FpPj99EC6smHfeH%2BG6oWYtY3oXMdrFKDjqL8aw&X-Amz-Signature=df8e5d172de31781e325c4a03e9ad7fa273df4b30e4af4044d46be2fd366db2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

