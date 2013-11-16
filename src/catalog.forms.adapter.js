angular.module('catalog.forms.adapter', ['notifications'])
    .directive('catalogFormsFieldAdapter', ['topicRegistry', 'topicMessageDispatcher', CatalogFormsFieldAdapterFactory]);

function CatalogFormsFieldAdapterFactory(topicRegistry, topicMessageDispatcher) {
    return {
        restrict:'AC',
        link: function () {
            topicRegistry.subscribe('catalog.item.updated', function (it) {
                topicMessageDispatcher.fire('form.field.updated', it);
            })
        }
    };
}