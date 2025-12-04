---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI75RPET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDYtKwrY5xQwpoZsu1heg8qe9Ooi5NSGdaOC%2FmonlijVwIhAMVeUwFdK8PwaKgZPY9jBVo%2FMXLxIhauBMvcwommMXm%2BKv8DCDkQABoMNjM3NDIzMTgzODA1Igz9a72%2BsbaOVgvjq4Iq3ANtkkukp5cEPKE4er0jILwbt60SztrlV30dOkGwaJmbi90aptJz81kgy9h%2FFLd2kcL1UtQxgJg4Dx31Z2ocdl2kge%2BIMx2YiEJY31sN9aPP83BfGKZ7MRit8iC7553BxVZ3sFjz68DQ19dEhPQJWnmaYbV7wHlUjP%2B8x3E4qoWRGQY38igGhNRJM1TUD3rRC6G3IFVr3lKGrKJfVyqf77%2BJqRaZAtoNSSQHw5pePyEDW8aEU9htHd%2FfsLntpPoQkc3lGbGqLoW0bPCpTv8wnL9QCYJyMFdkhbQxjgvA318iMVH2PBP8KXdFehDxH%2B%2FdnrlATOruoO%2Bu8OUzA96%2Fvttj%2BdwLTa37152T1fNz6jXoxFZFa%2FOVO3S%2FobdkE%2BpIy5MgO8OHDq2oEc5XIbF0uAb7UDw1t46%2BwFHvq7YYxZ5s6sUbdxsOGwcCRSa6ryOdvdXnJV0ungheUS7Y%2FESWcyf5ZRXHS9%2FAmmGhX5edZLOStz68p7RCp3dPTa6h88KXJWgxrc4vMp0kyIVnIX5RmDoLmmKkXtn2ZMRaVaekJ9k5gOVt0zOACK6hGuWKhFfVXtIjPvFrLUgTvkZLXWgiWuMvod%2BrWollWP7ZufqgLO8d96GstYCdf%2FTUu5izDTDLlMPJBjqkAUTAzb55FKUqj142IRQSPrVynr2NzyElpsh3NdMYkxI6uwskBvjE%2BrIK5r58A8V0leaFQqsjHbIkJxNtepKwk1LDjRmFdQDeyOnFSbk%2F01%2BfX5hs3WjMNHPZVoHIQGiqX%2B53qPvsXd57KW5nVFkGRvms%2BuNPo25eUK1lnS3sEcNxZdXGcoj91uM4%2BMifmJ%2BLy1E3pte%2FhCmZCWSTfohMZgWMuaGD&X-Amz-Signature=682c1c2b7f6ef5570d6b029393624f16b2d7b8d3f33bf36533c16e287faa1ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI75RPET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDYtKwrY5xQwpoZsu1heg8qe9Ooi5NSGdaOC%2FmonlijVwIhAMVeUwFdK8PwaKgZPY9jBVo%2FMXLxIhauBMvcwommMXm%2BKv8DCDkQABoMNjM3NDIzMTgzODA1Igz9a72%2BsbaOVgvjq4Iq3ANtkkukp5cEPKE4er0jILwbt60SztrlV30dOkGwaJmbi90aptJz81kgy9h%2FFLd2kcL1UtQxgJg4Dx31Z2ocdl2kge%2BIMx2YiEJY31sN9aPP83BfGKZ7MRit8iC7553BxVZ3sFjz68DQ19dEhPQJWnmaYbV7wHlUjP%2B8x3E4qoWRGQY38igGhNRJM1TUD3rRC6G3IFVr3lKGrKJfVyqf77%2BJqRaZAtoNSSQHw5pePyEDW8aEU9htHd%2FfsLntpPoQkc3lGbGqLoW0bPCpTv8wnL9QCYJyMFdkhbQxjgvA318iMVH2PBP8KXdFehDxH%2B%2FdnrlATOruoO%2Bu8OUzA96%2Fvttj%2BdwLTa37152T1fNz6jXoxFZFa%2FOVO3S%2FobdkE%2BpIy5MgO8OHDq2oEc5XIbF0uAb7UDw1t46%2BwFHvq7YYxZ5s6sUbdxsOGwcCRSa6ryOdvdXnJV0ungheUS7Y%2FESWcyf5ZRXHS9%2FAmmGhX5edZLOStz68p7RCp3dPTa6h88KXJWgxrc4vMp0kyIVnIX5RmDoLmmKkXtn2ZMRaVaekJ9k5gOVt0zOACK6hGuWKhFfVXtIjPvFrLUgTvkZLXWgiWuMvod%2BrWollWP7ZufqgLO8d96GstYCdf%2FTUu5izDTDLlMPJBjqkAUTAzb55FKUqj142IRQSPrVynr2NzyElpsh3NdMYkxI6uwskBvjE%2BrIK5r58A8V0leaFQqsjHbIkJxNtepKwk1LDjRmFdQDeyOnFSbk%2F01%2BfX5hs3WjMNHPZVoHIQGiqX%2B53qPvsXd57KW5nVFkGRvms%2BuNPo25eUK1lnS3sEcNxZdXGcoj91uM4%2BMifmJ%2BLy1E3pte%2FhCmZCWSTfohMZgWMuaGD&X-Amz-Signature=045b1eeb8bb50159b8dadcd838cacfd0a9b161872f6f27714a589ba9577ed53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

