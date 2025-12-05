---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZK5NFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBA8JjwjwbOznHgekCVYjzSnzy%2Bg4bnDB3qVIWzCo%2BwAiB5GYDKDTHF%2FC%2ByBkfHJm8%2B8ScuceWNsNRSFQFRRA76tir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMolsdjSxE32mQdImfKtwDUJuvnEPP%2FaGXwIaK0ab3lnVExr8Yh1BskKpjy3PRF7noQ6R20My0ERzJEK3Wp3T%2BV2tvxo977Gg9cuC9eu4ERSGMj5ImwEGzHAPG1xm9hwp9jTdCI5cLC6zn3j0820QuQiH9GVNPw9pYyeftfWZAHAqRLRWVrqvTEulTC6n9pwvWie2d0iNPkyb0fnV6k3OFGUkyy8Hms4mwuvh5G8q4ddsI1AKlyjDfrxDc2n3GWznv57Fjt6y6RYvwq6Im%2FM%2BCAQ%2F3oBg2zmLVQlOch6BHrUHE%2F05Vz%2FFkxgS%2BrMIiM4HuN3k5BPuC3RnzwwPutpI1Li0GoSp7tbOLGfovyUSbMFOpeO%2FcPvVMN%2FBj5NMpMacbb4KVZyeByzSkZcBFXA52h%2BtnJCCA%2FgCtwWLw6c4fF9ASzNSsS9ZAp%2BvTvxkwEszMEnzNHlxxEyFx4xbrUZQFXFsGKkmUb8OS%2B1AQXLGm0bdHVGg12wps%2F1xlLPPZBbMnPaoRJHYzNk4VfEY0TRL2x7FQ5nrtm4DUYtqkCNbJm4OFdNIon9BTla%2FD5oL4RtJL5H0YNte6V%2BKmZd09paToTE1SwO0LmHAATghZ%2FWQjUsm1C8%2B4hSNfklsU1kvnPM25XiMFjWCTrxc2uDswnsbNyQY6pgGetIMngwi3fehPISo6VAo0xs5tyrHwruFBCqJK38dazKejcnKyMQdn9LUn7UQ%2FxVYEEAqyEayXrpOfmXQp2ULXFZ%2FjakKipfIWRZu5oryyAhYuWRJ2rQ%2FyZ%2B1rgq%2FbgC8EU8rxs6z1syGVSz%2FRpd%2BxtnUXRK9u4SPc8pRMwonVfRMMFw5H0bwB3E1IpM4dFKV6CyfUcDtOydrH6N%2BrO%2B9qrIAjyOJ7&X-Amz-Signature=aba106a7f56d041d43d9ab7c09f09342211657da75abb358798ac7306e1d2412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZK5NFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBA8JjwjwbOznHgekCVYjzSnzy%2Bg4bnDB3qVIWzCo%2BwAiB5GYDKDTHF%2FC%2ByBkfHJm8%2B8ScuceWNsNRSFQFRRA76tir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMolsdjSxE32mQdImfKtwDUJuvnEPP%2FaGXwIaK0ab3lnVExr8Yh1BskKpjy3PRF7noQ6R20My0ERzJEK3Wp3T%2BV2tvxo977Gg9cuC9eu4ERSGMj5ImwEGzHAPG1xm9hwp9jTdCI5cLC6zn3j0820QuQiH9GVNPw9pYyeftfWZAHAqRLRWVrqvTEulTC6n9pwvWie2d0iNPkyb0fnV6k3OFGUkyy8Hms4mwuvh5G8q4ddsI1AKlyjDfrxDc2n3GWznv57Fjt6y6RYvwq6Im%2FM%2BCAQ%2F3oBg2zmLVQlOch6BHrUHE%2F05Vz%2FFkxgS%2BrMIiM4HuN3k5BPuC3RnzwwPutpI1Li0GoSp7tbOLGfovyUSbMFOpeO%2FcPvVMN%2FBj5NMpMacbb4KVZyeByzSkZcBFXA52h%2BtnJCCA%2FgCtwWLw6c4fF9ASzNSsS9ZAp%2BvTvxkwEszMEnzNHlxxEyFx4xbrUZQFXFsGKkmUb8OS%2B1AQXLGm0bdHVGg12wps%2F1xlLPPZBbMnPaoRJHYzNk4VfEY0TRL2x7FQ5nrtm4DUYtqkCNbJm4OFdNIon9BTla%2FD5oL4RtJL5H0YNte6V%2BKmZd09paToTE1SwO0LmHAATghZ%2FWQjUsm1C8%2B4hSNfklsU1kvnPM25XiMFjWCTrxc2uDswnsbNyQY6pgGetIMngwi3fehPISo6VAo0xs5tyrHwruFBCqJK38dazKejcnKyMQdn9LUn7UQ%2FxVYEEAqyEayXrpOfmXQp2ULXFZ%2FjakKipfIWRZu5oryyAhYuWRJ2rQ%2FyZ%2B1rgq%2FbgC8EU8rxs6z1syGVSz%2FRpd%2BxtnUXRK9u4SPc8pRMwonVfRMMFw5H0bwB3E1IpM4dFKV6CyfUcDtOydrH6N%2BrO%2B9qrIAjyOJ7&X-Amz-Signature=2d719e1e9f1d892faeea5bebebfc89d38d0dfdd8c898e196e9687f072f3dc206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

