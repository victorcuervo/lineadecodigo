---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNFDMO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfnEWNipR2mWAqvJkFPs4lUQ8qkKJIjOxHJ%2FIMyag2YwIgX5%2BHKL43L3n6azPa2W%2BpU9bm8Gp2doVJfHyQG1Ho7vAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEquBoX5jaCm99Y%2BhSrcA2x68WBj97N53TWwGk3wC2cUGdBLgJmhvrgpeeEvPdV5DSc24Lqhw5ZyJaG9xMEaxMZImQTlt3rt8AmGA%2F1CmR5yON2x7Ve6NHSbDgAWFeISLCG5ImkKWaYeDD0o5Y7COxXW7SI6aPYp9KU7qrp57i3mNOBQH8NfHcnuhZO%2B3tjqNo%2BoYmE8uJiv0ik%2Bd570G0s3xoTKveWAuI%2B6bAJR%2F67BnecEWrdjHJ1Qhiay4SpbWihpsZJJEAeEj1OTvmfaJNEsTiVPWyV3KKXdFTMytjytutU3bmf62WhyN0jyj6yYsrA4pfj4mm0SyJxj0kYSEHAgQHsX957ZCQ77ba3itTzKZ14XSfMGjQjdGmv4raQpuncD%2BC%2BqnOYigghYX2XIuO8sG6sMDW7aMJrP8t3%2BnvDDkkVQeVaJkbFhwMHt1oUjDwRA%2BWgFTKMoNN29dZpHBKoD%2FJB%2FKmxFOZUnYC2buKR8QAfVtqwHnjsL0zYqK5QF9dR9gPA3F9qcvNjFKbcmK877eyjLAv0XxHXioJnuX3NbPSYiQC%2B8yVC%2F6VobawuNBooz9SlSp7o%2BeKhKspv2hOLLk%2FFns%2FkypQeHh6Ff5qVKe8Vqpzck16w84Ly7%2BDFmxEOVkBpZnv3OoD2MMJzQ2ckGOqUBFJ%2BeQy%2BTm%2Bo4%2BtI9DwGCpAS3jh2mMBH9bnJjRO0sxJMFK4YrBXPMeq7TfXfEyCvziJtolHebk2VIAk6xtxQh5JoAKbXoSl%2F4AipdvuGqZTN1WEkJyIwhWCiEBSCmd8Cv2kgXMcM%2BZH7iglboMQxgw3d0gnckRWfqjqgcGr4pZiDq761IPJzYTmDtyFSqIK9q5zKNLI80gLfT81RJzlFhu3S%2BB7fj&X-Amz-Signature=1594e8375663f1e7f74cbd107ae3903e7e2ac919b8b99153f190d9462dc201ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNFDMO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfnEWNipR2mWAqvJkFPs4lUQ8qkKJIjOxHJ%2FIMyag2YwIgX5%2BHKL43L3n6azPa2W%2BpU9bm8Gp2doVJfHyQG1Ho7vAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEquBoX5jaCm99Y%2BhSrcA2x68WBj97N53TWwGk3wC2cUGdBLgJmhvrgpeeEvPdV5DSc24Lqhw5ZyJaG9xMEaxMZImQTlt3rt8AmGA%2F1CmR5yON2x7Ve6NHSbDgAWFeISLCG5ImkKWaYeDD0o5Y7COxXW7SI6aPYp9KU7qrp57i3mNOBQH8NfHcnuhZO%2B3tjqNo%2BoYmE8uJiv0ik%2Bd570G0s3xoTKveWAuI%2B6bAJR%2F67BnecEWrdjHJ1Qhiay4SpbWihpsZJJEAeEj1OTvmfaJNEsTiVPWyV3KKXdFTMytjytutU3bmf62WhyN0jyj6yYsrA4pfj4mm0SyJxj0kYSEHAgQHsX957ZCQ77ba3itTzKZ14XSfMGjQjdGmv4raQpuncD%2BC%2BqnOYigghYX2XIuO8sG6sMDW7aMJrP8t3%2BnvDDkkVQeVaJkbFhwMHt1oUjDwRA%2BWgFTKMoNN29dZpHBKoD%2FJB%2FKmxFOZUnYC2buKR8QAfVtqwHnjsL0zYqK5QF9dR9gPA3F9qcvNjFKbcmK877eyjLAv0XxHXioJnuX3NbPSYiQC%2B8yVC%2F6VobawuNBooz9SlSp7o%2BeKhKspv2hOLLk%2FFns%2FkypQeHh6Ff5qVKe8Vqpzck16w84Ly7%2BDFmxEOVkBpZnv3OoD2MMJzQ2ckGOqUBFJ%2BeQy%2BTm%2Bo4%2BtI9DwGCpAS3jh2mMBH9bnJjRO0sxJMFK4YrBXPMeq7TfXfEyCvziJtolHebk2VIAk6xtxQh5JoAKbXoSl%2F4AipdvuGqZTN1WEkJyIwhWCiEBSCmd8Cv2kgXMcM%2BZH7iglboMQxgw3d0gnckRWfqjqgcGr4pZiDq761IPJzYTmDtyFSqIK9q5zKNLI80gLfT81RJzlFhu3S%2BB7fj&X-Amz-Signature=1fad658aa368ebce76daaa95e52597d42ce839dd3349a9e3db63ddd0dc7c192a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

