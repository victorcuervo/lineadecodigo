---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGRA2NHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr8Lv%2Bzvz3m8poWogMSexvNXGV2YAyY9VmrVDWb1eFPAiEAyv86RC1b2Mc0PTYPLmZbdGTP0Z7W0ctKQiCFz%2BZuskMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJGTc7eeWrs30rJEircA5pfm9EVfCcm28R%2BiKVqYaSltw4JiZkmyWU%2B7E14Np4pBa7dtZTymVNyS5Rwtakxv1cYpw8YXvFYU65atc5EB4XjzmU%2BGY6UWBijFNVpwq5cE%2FCmyoALL2jEFFQ37yWUCogaeGlawpoR7lpATyZbk%2FYpLTxqO4YvGOuZZssRPaMq%2FB4y1l%2Bak5SRez0oPDwqnxoWRwUdRd%2FR874uZJpcqPU%2F%2FDUR6mTohbUjB3IeRkp4807kfiumGEW%2B87LtFP%2Bfu%2B6w%2BA9j1MGcgvF5b2VUvtEENWLDHVt6NcTmusN1Y8Xigou9JpTHBIRgRwmABj1%2F%2B%2FeDQgMlZPbXjZ8ei7lOszKuuJ013S%2Fse0%2FXD42Xkn2hsiF5TYUyNbbk5SDuNJiq8b7chSiEaGw%2B2mBkDFbI36lL4ofRXed%2B1qtdTYCF%2B%2FFosK5uJBF4EIaq918Ygfz6bV0%2Bxtxz2PgXv5kikfzCOVesIRo8E%2FRT3UGOrSUE5%2FabZgCElrjuSouAVvW3c2TmmiOPpQIXSkXlIKclcdSSlumFSod4D7ichilwxw9AjRDd2UnNPQAekiFRZ5eMqJp6YlnlaW8SKoTMmFvXXokzGGMQl8k%2FEEk3%2B58GMFq8%2BQ4hKoJxBDkp4DZCoGpaMI790skGOqUBxNfvAh2m%2FPa9DBgS138B6H3JCuKklwyjgOerY1cfnEivH05IpxJLuuiURJomKjd4P%2FD2vALAYBoSCRT7yEpeoMp6yjsm%2BrUlasSGemYnI58nd6q07D%2F%2BZtsS27sMWJo8JvVnHf1XFd4TDfjJuX8gjgvJQSeXYW4XAL4Mj9tXz9PpTMhajIVeyQXnuUJ24AUWKa4b8c1FK1sr01Y08F7R%2F5HU4mR4&X-Amz-Signature=d42c15b025a2cfcb7715617516a7b4a86d2a4b882885a74aa6f657ff6c8a8d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGRA2NHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr8Lv%2Bzvz3m8poWogMSexvNXGV2YAyY9VmrVDWb1eFPAiEAyv86RC1b2Mc0PTYPLmZbdGTP0Z7W0ctKQiCFz%2BZuskMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJGTc7eeWrs30rJEircA5pfm9EVfCcm28R%2BiKVqYaSltw4JiZkmyWU%2B7E14Np4pBa7dtZTymVNyS5Rwtakxv1cYpw8YXvFYU65atc5EB4XjzmU%2BGY6UWBijFNVpwq5cE%2FCmyoALL2jEFFQ37yWUCogaeGlawpoR7lpATyZbk%2FYpLTxqO4YvGOuZZssRPaMq%2FB4y1l%2Bak5SRez0oPDwqnxoWRwUdRd%2FR874uZJpcqPU%2F%2FDUR6mTohbUjB3IeRkp4807kfiumGEW%2B87LtFP%2Bfu%2B6w%2BA9j1MGcgvF5b2VUvtEENWLDHVt6NcTmusN1Y8Xigou9JpTHBIRgRwmABj1%2F%2B%2FeDQgMlZPbXjZ8ei7lOszKuuJ013S%2Fse0%2FXD42Xkn2hsiF5TYUyNbbk5SDuNJiq8b7chSiEaGw%2B2mBkDFbI36lL4ofRXed%2B1qtdTYCF%2B%2FFosK5uJBF4EIaq918Ygfz6bV0%2Bxtxz2PgXv5kikfzCOVesIRo8E%2FRT3UGOrSUE5%2FabZgCElrjuSouAVvW3c2TmmiOPpQIXSkXlIKclcdSSlumFSod4D7ichilwxw9AjRDd2UnNPQAekiFRZ5eMqJp6YlnlaW8SKoTMmFvXXokzGGMQl8k%2FEEk3%2B58GMFq8%2BQ4hKoJxBDkp4DZCoGpaMI790skGOqUBxNfvAh2m%2FPa9DBgS138B6H3JCuKklwyjgOerY1cfnEivH05IpxJLuuiURJomKjd4P%2FD2vALAYBoSCRT7yEpeoMp6yjsm%2BrUlasSGemYnI58nd6q07D%2F%2BZtsS27sMWJo8JvVnHf1XFd4TDfjJuX8gjgvJQSeXYW4XAL4Mj9tXz9PpTMhajIVeyQXnuUJ24AUWKa4b8c1FK1sr01Y08F7R%2F5HU4mR4&X-Amz-Signature=2e0b0305ae50a250436ec7cd532f9f98579dfc8f880b66c2994b85a46c2fa483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

