---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWN2HALY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9FBEi8%2B9fygse4Ep90qALWwryuV49Kiozoay9dga%2FgIgS2FSR%2F9kLZBo3BD41X7v61dqGzErzL0Eh2lF%2BcliNqIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHvVfrlO%2BsHEROdircA9BDCloWT7FVvg4CW9j0NVeaKT46oZxO7e%2BPnpLhdmr35oHTRekc9Sf4PUv3CkWBCbeaBTxzxhJhKhXdYJrP7NNw7ASGpD8Z%2F4o8ZQykkSejY8dvVPu59KukksUTtLq0lQknvd0l2AytEubdgxmG7%2BLLfkRNLQpWy5%2BkbU8nbTzBmEsgxr9%2FuxRkXjXhLdeSQ7VrbyGcMDK5XujPf4XR16azM%2BIrVcxi7bpDEFEMyB2Fo1caKOmxfOmp%2FzKilwvIXy%2BvVenC64tgGb%2B9kZ348z6FMrJU71eN7cAKFGdGNdVaxBfj%2Be8n7P6TxtCYkxe%2ByNgzsiuCIVKbgXHTKJ%2BmK8UwOLOEZt1mWdhyLRw8XY%2FTFESGmy%2B2QtwdcJmEjCCb2tjVE%2BxMHK79jy2w7KbveyXumyyOZ4saurEQ%2BhxG%2Bt%2BozhmqLygqhP7AcKSIMabqlY7Jy2jqf6VEgkb%2FlDMYBBHhdKW3MV8HJKn5GpEF6SiIrbr5a444%2FmyFRNR9ODtDLF6LZukL64gZtLFKc2xiutnfyTaeliXPE1DVzZT7uFHeQG0WQSEiNUj%2FF%2FpPGUAfGR0lihMKwAB%2F66bTdhknZg%2F1DtCZQBa8J0%2FyYuejhnIwGJvpBBsheM95O1GeMMuZ1ckGOqUBCCSM81shcopHVQHvaXtRuQ5QsXrOjuGJcLOzu5Pp6Azc5Hz1o6z2j6%2F9bZ7TnpTXmSA1LEBGSohZujRxAHVULWWMrbRypEGGaxOqetZSvgqoaTsvbgRA6dw9YgcGNTUantwJTF39VkiaTz2sCoqTgz%2Fe9kePdQOtF0hD14AfCpYoKt3HTbilQDFXXW8O7hgDaEATS1KA7pmN%2FDi8adUSx%2FhX%2Bch%2B&X-Amz-Signature=aa27f147fea130ab4d077e0e62fe83e7997a79de4d21d30652191b6a30ba1993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWN2HALY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9FBEi8%2B9fygse4Ep90qALWwryuV49Kiozoay9dga%2FgIgS2FSR%2F9kLZBo3BD41X7v61dqGzErzL0Eh2lF%2BcliNqIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHvVfrlO%2BsHEROdircA9BDCloWT7FVvg4CW9j0NVeaKT46oZxO7e%2BPnpLhdmr35oHTRekc9Sf4PUv3CkWBCbeaBTxzxhJhKhXdYJrP7NNw7ASGpD8Z%2F4o8ZQykkSejY8dvVPu59KukksUTtLq0lQknvd0l2AytEubdgxmG7%2BLLfkRNLQpWy5%2BkbU8nbTzBmEsgxr9%2FuxRkXjXhLdeSQ7VrbyGcMDK5XujPf4XR16azM%2BIrVcxi7bpDEFEMyB2Fo1caKOmxfOmp%2FzKilwvIXy%2BvVenC64tgGb%2B9kZ348z6FMrJU71eN7cAKFGdGNdVaxBfj%2Be8n7P6TxtCYkxe%2ByNgzsiuCIVKbgXHTKJ%2BmK8UwOLOEZt1mWdhyLRw8XY%2FTFESGmy%2B2QtwdcJmEjCCb2tjVE%2BxMHK79jy2w7KbveyXumyyOZ4saurEQ%2BhxG%2Bt%2BozhmqLygqhP7AcKSIMabqlY7Jy2jqf6VEgkb%2FlDMYBBHhdKW3MV8HJKn5GpEF6SiIrbr5a444%2FmyFRNR9ODtDLF6LZukL64gZtLFKc2xiutnfyTaeliXPE1DVzZT7uFHeQG0WQSEiNUj%2FF%2FpPGUAfGR0lihMKwAB%2F66bTdhknZg%2F1DtCZQBa8J0%2FyYuejhnIwGJvpBBsheM95O1GeMMuZ1ckGOqUBCCSM81shcopHVQHvaXtRuQ5QsXrOjuGJcLOzu5Pp6Azc5Hz1o6z2j6%2F9bZ7TnpTXmSA1LEBGSohZujRxAHVULWWMrbRypEGGaxOqetZSvgqoaTsvbgRA6dw9YgcGNTUantwJTF39VkiaTz2sCoqTgz%2Fe9kePdQOtF0hD14AfCpYoKt3HTbilQDFXXW8O7hgDaEATS1KA7pmN%2FDi8adUSx%2FhX%2Bch%2B&X-Amz-Signature=58f1f08bd82da8d19ddf51f8487c485f11d374e930044d82b3c5154925995afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

